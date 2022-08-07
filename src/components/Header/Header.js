import React from "react";
import logo from "../../images/logo.svg";
import icon from "../../images/icon-profile.svg";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
    console.log(props);
    return(
        <header className={`header ${props.className}`}>
            <img className="header__logo" src={logo} alt="Логотип" />
            <nav className="header__menu">
                <Link to={props.link} className="link header__link">
                    {props.nameLink}
                </Link>
                <button className={`button header__button ${props.invisible}`}>
                    {props.name}
                </button>

                {/* бургерное меню */}
                <div className="header__menu-body">
                    <nav className="header__menu-list">
                        <NavLink exact to="/" className="header__menu-item-link link">Главная</NavLink>
                        <NavLink to="/movies" className="header__menu-item-link link">Фильмы</NavLink>
                        <NavLink to="/saved-movies" className="header__menu-item-link link">Сохраненные фильмы</NavLink>
                    </nav>
                    <div className="profile">
                        <p className="profile__name">Аккаунт</p>
                        <button type="button" className="profile__button button">
                            <img className="profile__img" src={icon} alt="Profile" />
                        </button>
                    </div>
                </div>
                <div className="header__menu-icon-container">
                    <div className="header__menu-icon">
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;