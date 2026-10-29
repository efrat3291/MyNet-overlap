import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useStyles } from "./styles";

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { theme, colors, toggleTheme } = useTheme();
  const classes = useStyles(colors);

  const { t } = useTranslation("translation", {
    keyPrefix: "NAVBAR",
  });

  return (
    <nav className={classes.navbar}>
      <button
        className={classes.link}
        onClick={() => navigate("/users")}
      >
        {t("USERS")}
      </button>

      <button
        className={classes.link}
        onClick={() => navigate("/users/create")}
      >
        {t("CREATE_USER")}
      </button>

      <button
        className={classes.link}
        onClick={() => navigate("/posts")}
      >
        {t("POSTS")}
      </button>

      <button
        className={classes.link}
        onClick={() => navigate("/posts/create")}
      >
        {t("CREATE_POST")}
      </button>

      <button
        className={classes.link}
        onClick={toggleTheme}
        aria-label={
          theme === "light" ? t("DARK_MODE") : t("LIGHT_MODE")
        }
      >
        {theme === "light" ? (
          <>
            <Moon size={18} />
            {t("DARK_MODE")}
          </>
        ) : (
          <>
            <Sun size={18} />
            {t("LIGHT_MODE")}
          </>
        )}
      </button>
    </nav>
  );
};
