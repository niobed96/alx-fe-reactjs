import React from "react";
import { useState } from "react";

function RegistrationForm() {
  const [username, setUsename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const validateForm = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = "Username invalid";
    }
    if (!email) {
      newErrors.email = "Email invalid";
    }
    if (!password) {
      newErrorsewErrors.password = "password invalid";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).lenght === 0;
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsename(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default RegistrationForm;
