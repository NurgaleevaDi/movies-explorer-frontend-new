import React from "react";
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
            
        </div>
    )
}
export default Main;