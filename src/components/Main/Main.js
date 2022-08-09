import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Portfolio from "./Portfolio/Portfolio";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";

function Main() {
    return(
        <div className="landing">
            <Header 
                link="/signup"
                name="Войти"
                nameLink="Регистрация"
                burger="header__ivisible-burger"
            />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <Portfolio />
            <Footer />
        </div>
    )
}
export default Main;