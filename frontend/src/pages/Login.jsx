import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const mylogin = "admin";
  const mypassword = "1234";

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const Log = () => {
    if (login === mylogin && password === mypassword) {
      alert("Успешный вход");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div className="login-wrap">
      <h1 className="login-title">Вход</h1>

      <input
        type="text"
        placeholder="Логин"
        className="login-input"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <input
        type="password"
        placeholder="Пароль"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="login-btn" onClick={Log}>
        Войти
      </button>

      <button className="login-btn" onClick={() => navigate("/")}>
        Назад
      </button>
    </div>
  );
}

export default Login;
