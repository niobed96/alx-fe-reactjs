import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Profile from "./components/Profile";
import Blog from "./components/BlogPost";
import Home from "./components/Home";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import LogIn from "./components/ProtectedRoute.jsx";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logIn = () => {
    setIsAuthenticated(true);
  };

  const logOut = () => {
    setIsAuthenticated(false);
  };
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      {isAuthenticated ? (
        <button onClick={logOut}>Log Out </button>
      ) : (
        <Link to="/login">Log In</Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        >
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="Details" element={<ProfileDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
