import "./Registration.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
  
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const Reg = () => {
      if (login != "" && password != "") {
        alert("Вы успешно зарегистрировались");
        navigate("/mainpage");
      } else {
        alert("введите логин и пароль")
      }
    };

    return (
        <div className="login-wrap">
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
  
        <button className="login-btn" onClick={Reg}>
          Зарегистрироваться
        </button>

        <button className="login-btn" onClick={() => navigate("/login")}>
          Войти
        </button>
      </div>
      );
}

export default Registration;