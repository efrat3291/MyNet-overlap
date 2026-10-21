import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";

const UsersPage = () => <h1>Users</h1>;
const CreateUserPage = () => <h1>Create User</h1>;
const PostsPage = () => <h1>Posts</h1>;
const CreatePostPage = () => <h1>Create Post</h1>;

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/create" element={<CreateUserPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/create" element={<CreatePostPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;