import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";


function Profile() {
    return(
        <div className="profile">
            <Header 
                className="header_white"
                invisible="header__invisible"
                button="header__invisible-button"
            />
            <form className="profile__form">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <input className="profile__input-name"></input>
                <input className="profile__input-email"></input>
            </form>
            <footer className="profile__footer">
                <button type="button" className="profile__btn button">Редактировать</button>
                <Link to="/signin" className="profile__signout-link link">
                    Выйти из аккаунта
                </Link>
            </footer>
        </div>
    )
}
export default Profile;