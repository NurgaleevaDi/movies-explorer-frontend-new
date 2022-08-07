import React from "react";

import Footer from "../Footer/Footer";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Portfolio from "./Portfolio/Portfolio";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";

function Main() {
    return(
        <div>
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