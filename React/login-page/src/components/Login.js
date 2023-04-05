import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const url = `${window.API_ENDPOINT}/login`;
    axios
      .post(
        "http://192.168.0.4:9292/api/v1/login",
        JSON.stringify({
          userName: username,
          password: password,
        })
      )
      .then((result) => {
        localStorage.setItem("token", result.data.accessToken);
        if (result.status === 200) {
          navigate("/dashboard");
        }
      });
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="uname">username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="username"
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
          <button className="button" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};
