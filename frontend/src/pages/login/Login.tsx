import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth/auth.service";

type LoginForm = {
  username: string;
};

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      const result = await authService.login(data);

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/posts");
    } catch {
      // הצגת הודעת שגיאה למשתמש תתווסף בשלב הבא.
    }
  };

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>

        <input
          id="username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 2,
              message: "Username must contain at least 2 characters",
            },
          })}
        />

        {errors.username && (
          <p role="alert">{errors.username.message}</p>
        )}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </main>
  );
};