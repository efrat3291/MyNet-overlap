import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { CreatePost } from "./pages/createPost";
import { Navbar } from "./components/navbar/Navbar";
import { Post } from "./pages/posts";
import { CreateUser } from "./pages/createUser";
import { Users } from "./pages/users";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
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