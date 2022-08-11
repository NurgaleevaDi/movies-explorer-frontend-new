import React from "react";
import { useState } from "react";
import logo from "../../images/logo.svg";
// import icon from "../../images/icon-profile.svg";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";



function Header(props) {
    console.log(props);
    const [openMenu, setOpenMenu] = useState(false);

    function handleOpenMenu() {
        setOpenMenu(true);
    }
    function handleCloseMenu() {
        setOpenMenu(false);
    }

    return(
        <header className={`header ${props.className}`}>
            <Link to="/" className="header__logo-link link">
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            <nav className="header__menu">
                <Link to="/signup" className={`link header__register-link ${props.invisible}`}>
                    Регистрация
                </Link>
                <Link to="/signin" className={`link heaader__login-link ${props.invisible}`}>
                    Войти
                </Link>
            </nav>    
            <button  type="button" className="header__burger-container button" onClick={handleOpenMenu}>
                <span className={`header__burger-icon ${props.activeBurger ? "header__burger-icon_active" : ""}`}></span>
            </button>
             <HeaderMenu
                openMenu={openMenu}
                onClose={handleCloseMenu}
            />
        </header>
    )
}
export default Header;