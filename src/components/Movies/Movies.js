import React from "react";
import Header from "../Header/Header";

function Movies() {
    return(
        <div className="movies">
            <Header 
                className="header_white"
                invisible="header__invisible"/>
            <div className="movies__search-block">
                <input > 
                </input>
            </div>
        </div>
    )
}
export default Movies;