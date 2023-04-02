import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-length": "51",
        "content-type": "application/json; charset=utf-8",
        // token: "QpwL5tke4Pnpja7X4",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("token", result.token);
      });

    let login = localStorage.getItem("token");
    if (login) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="uname">username</label>
        <input
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="uname"
          name="uname"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
