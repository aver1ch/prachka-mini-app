import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password })
    });
  
    if (!res.ok) {
      const err = await res.text();
      alert("Ошибка: " + err);
      return;
    }
  
    const data = await res.json();
    console.log(data.token); // "vovan"
    localStorage.setItem("token", data.token);
    navigate("/mainpage");
  };
  
  

  return (
    <div className="login-wrap">

      <header className="header">
        <div className="container">
          <img src="/polylogo.svg" alt="PolyLogo" className="logo" />
        </div>
      </header>

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

      <button className="btn" onClick={handleLogin}>
        Войти
      </button>

      <button className="btn" onClick={() => navigate("/registration")}>
        Зарегистрироваться
      </button>
    </div>
  );
}

export default Login;
