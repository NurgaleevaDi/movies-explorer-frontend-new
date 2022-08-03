import React from "react";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Promo from "./Promo/Promo";

function Main() {
    return(
        <div>
            <Promo />
            <NavTab />
            <AboutProject />
            
        </div>
    )
}
export default Main;