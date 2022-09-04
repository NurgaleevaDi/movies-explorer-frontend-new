import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList"
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import mainApi from "../../utils/MainApi";
import { searchFilter } from "../../utils/utils";

function SavedMovies(props) {

    const [savedMovies, setSavedMovies] = useState([]);
    const [savedMoviesId, setSavedMoviesId] = useState([]);
    const [errorSearch, setErrorSearch] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    
    function getFilms() {
        const token = localStorage.getItem('jwt');
        mainApi
            .getFilms(token)
            .then((movies) => {
                setSavedMovies(movies.data);
                console.log('saved res ', movies.data);
                setSavedMoviesId(movies.data.map(a => a._id));
                console.log('saved res ', savedMoviesId);
            })
            .catch((err) => console.log(err));
    }

    function handleRemoveMovie(_id) {
        const token = localStorage.getItem('jwt');
        mainApi
            .deleteFilm(_id, token)
            .then((res) => {
            })
            .catch((err) => {
                console.log(err);
            })

    }

    function handleSearch(keyWord, isShorts) {
        console.log(savedMovies);
        searchFilter(savedMovies, keyWord, isShorts);
        let movies = searchFilter(savedMovies, keyWord, isShorts);
        if (movies.length === 0) {
            setErrorSearch('Ничего не найдено');
            setSavedMovies([]);
        } else {
            setErrorSearch('');
            setSavedMovies(movies);

        }
    }

    // useEffect(()=> {
    //     if (props.loggedIn) {
    //         getFilms();
    //     }
    // }, [props.loggedIn])
    
    useEffect(()=> {
            getFilms();    
    }, [])

    useEffect(() => {

    })
   
    return(
        <div className="movies movies_saved">
            <Header
                loggedIn={props.loggedIn}
                className="header_white"
                textColor="navigation__menu-navlink_black"
            />
            <SearchForm
                handleSearch={handleSearch}
            />
            <MoviesCardList
                movies={savedMovies}
                savedMoviesId={savedMoviesId}
                handleRemoveMovie={handleRemoveMovie}
                errorSearch={errorSearch}
            />
            <Footer />
        </div>
    )
}
export default SavedMovies;