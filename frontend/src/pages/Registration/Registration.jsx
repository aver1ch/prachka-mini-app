import "./Registration.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
  
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
      const res = await fetch("/reg", {
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
      console.log(data.token); // "good"
      alert("Регистрация успешна!");
      navigate("/login");
    };
    

    return (
        <div className="login-wrap">

        <header className="header">
          <div className="container">
            <img src="/polylogo.svg" alt="PolyLogo" className="logo" />
          </div>
        </header>

        <h1 className="login-title">Регистрация</h1>
  
        <input
          type="text"
          placeholder="Введите ваш логин"
          className="login-input"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
  
        <input
          type="password"
          placeholder="Введите ваш пароль"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
  
        <button className="btn" onClick={handleRegister}>
          Зарегистрироваться
        </button>


        <button className="btn" onClick={() => navigate("/login")}>
          Войти
        </button>
      </div>
      );
}

export default Registration;