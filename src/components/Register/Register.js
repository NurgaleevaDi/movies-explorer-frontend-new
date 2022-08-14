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
                <div className="register__input-container">
                    <p className="register__input-disription">Имя</p>
                    <input 
                        className="register-input__text"
                        type="text" 
                        name="username"
                        placeholder="Имя"
                        value="Виталий"
                        required
                        minLength="2"
                        maxLength="30"
                    />
                </div>
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
                    <span className="register__error-message">Что-то пошло не так...</span>
                </div>  
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