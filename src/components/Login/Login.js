import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function Login() {
    return(
        <div className="register">
           <div className="register__header">
                <Link to="/" className="register__logo-link link">
                    <img src={logo} className="register__logo-img" alt="Логотип"></img>
                </Link>
                <p className="register__title">Рады видеть!</p>
            </div>
            <form className="register__form">
                <div className="register__input-container">
                    <p className="register__input-disription">E-mail</p>
                    <input 
                        className="register-input__text"
                        type="text" 
                        name="useremail"
                        placeholder="E-mail"
                        value="pochta@yandex.ru"
                        required
                        minLength="2"
                        maxLength="30"
                    />
                </div>
                <div className="register__input-container">
                    <p className="register__input-disription">Пароль</p>
                    <input 
                        className="register-input__text"
                        type="password" 
                        name="password"
                        placeholder="Пароль"
                        value="Пароль"
                        required
                    />
                </div>
            </form>
            <div className="register__footer">
                <button type="button" className="register__btn">Войти</button>
                <p className="register__signin">
                    Еще не зарегистрированы?
                    <Link to="/signup" className="register__signin-link">Регистрация</Link>
                </p>
            </div>
        </div>
    )
}
export default Login;