import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "pass") {
      setRedirect(true);
      const { isAuthenticated } = useAuth();
      return isAuthenticated ? Profile : <Navigate to="/login" />;
    } else {
      alert("Invalid credentials");
    }
  };

  if (redirect) {
    return <Navigate to="Settings" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LogIn;
