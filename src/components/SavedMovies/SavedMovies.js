import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList"
import find from "../../images/find-button.svg"
import search from "../../images/icon-search.svg"
import Footer from "../Footer/Footer";
import HeaderMenu from "../Header/HeaderMenu";

function SavedMovies() {
    const [openMenu, setOpenMenu] = useState(false);

    function handleOpenMenu() {
        setOpenMenu(true);
    }
    function handleCloseMenu() {
        setOpenMenu(false);
    }
    return(
        <div className="movies movies_saved">
            <Header 
                className="header_white"
                invisible="header__invisible"
                button="header__invisible-button"
                // openMenu={openMenu}
                openMenu={handleOpenMenu}
            />
              <HeaderMenu
                openMenu={openMenu}
                onClose={handleCloseMenu}
                // invisibleMenu="header__menu-invisible"
            />
            <section className="movies__search">
                <div className="movies__search-block">
                    <form className="movies__input-conteiner">
                    <img src={search} className="movies__img-search" alt="Иконка поиска"/>
                        <input type="text" className="movies__input" placeholder="Фильм"/>
                        <button className="movies__button button" type="submit">
                             <img src={find} alt="Кнопка искать"/>
                        </button> 
                    </form>
                    <div className="movies__shorts-conteiner">
                        <div className="movies__checkbox-group">
                            <input type="checkbox" className="movies__checkbox" id="movies__checkbox"/>
                            <label htmlFor="movies__checkbox" className="movies__checkbox-label"></label>
                        </div>
                        <p className="movies__shorts">Короткометражки</p>
                    </div>
                </div>
            </section>
            <MoviesCardList />
            <Footer />
        </div>
    )
}
export default SavedMovies;