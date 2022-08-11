import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function Register() {
    return(
        <div className="register">
            <div className="register__header">
                <Link to="/" className="register__logo-link link">
                    <img src={logo} className="register__logo-img" alt="Логотип"></img>
                </Link>
                <p className="register__title">Добро пожаловать!</p>
            </div>
            <form className="register__form">
                <input className="register-input__name"></input>
                <input className="register-input__email"></input>
                <input className="register-input__password"></input>
            </form>
            <div className="register__footer">
                <button type="button" className="register__btn">Зарегистрироваться</button>
                <p className="register__signin">
                    Уже зарегистрированы?
                    <Link to="/signin" className="register__signin-link">Войти</Link>
                </p>

            </div>
        </div>
    )
}
export default Register;