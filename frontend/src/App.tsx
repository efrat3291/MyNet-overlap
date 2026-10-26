import { Navigate, Route, Routes } from "react-router-dom";
import { CreatePost } from "./pages/createPost/CreatePost";
import { Navbar } from "./components/navbar/Navbar";
import { Post } from "./pages/posts/Posts";
import { CreateUser } from "./pages/createUser/CreateUser";
import { Users } from "./pages/users/Users";
import { Login } from "./pages/login/Login";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/posts" replace />} />

        <Route path="/posts" element={<Post />} />

        <Route path="/users/create" element={<CreateUser />} />
        
        <Route path="/users" element={<Users />} />

        <Route
          path="/posts/create"
          element={<CreatePost userId="6ad4941cecb6a37ade582baf" />}
        />
      </Routes>
    </>
  );
};

export default App;