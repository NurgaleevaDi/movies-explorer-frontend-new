import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../../images/icon-profile.svg";
import close from "../../images/close.svg";
import { Link } from "react-router-dom";

function HeaderMenu(props) {

    return(
        <div className={`header__menu-movies ${props.openMenu ? "opened" : ""}`}>
            <div className="header__menu-overlay">
                <div className="header__menu-content">
                    <button type="button" className="header__menu-movies-close button" onClick={props.onClose}>
                        <img src={close} className="header__menu-movies-close-img" alt="Закрыть"/>
                    </button>
                    <nav className="header__menu-movies-navlink">
                        <NavLink exact to="/" className="header__menu-item-link link header__menu-item-link_inv">Главная</NavLink>
                        <NavLink to="/movies" className="header__menu-item-link link">Фильмы</NavLink>
                        <NavLink to="/saved-movies" className="header__menu-item-link link">Сохраненные фильмы</NavLink>
                    </nav>
                    <div className="header__profile-info">
                        <p className="profile__name">Аккаунт</p>
                        <button type="button" className="profile__button button">
                            <Link to="/signin">
                                <img className="profile__img" src={icon} alt="Profile" />
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu;