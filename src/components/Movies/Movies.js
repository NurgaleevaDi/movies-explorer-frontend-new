import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesApi from "../../utils/MoviesApi.js";
import Preloader from "../Preloader/Preloader";
import mainApi from "../../utils/MainApi";


function Movies(props) {

    const [allMovies, setAllMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorSearch, setErrorSearch] = useState('');
    const [isShorts, setIsShorts] = useState(false);
    const [savedMovies, setSavedMovies] = useState([]);
    const [savedMoviesId, setSavedMoviesId] = useState([]);
   // const [savedFilms, setSavedFilms] = useState([]);

    //получение всех фильмов из MoviesApi
    const getAllMovies = () => {
        setLoading(true);
        MoviesApi.getMovies()
            .then((movies) => {
                    setAllMovies([...movies]);
                    setLoading(false);                
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            })
    }

    //фильтр фильмов по ключевому слову
    function searchFilter(movies, keyWord, isShorts) {
        //console.log('keyWord in filter ', keyWord, 'isShorts in filter ', isShorts);
        //console.log('movies in filter ', movies);
        if (!movies) {
            return [];  
        }
        let filtered = [...movies];
        if (keyWord) {
            filtered = filtered.filter((element) => element.nameRU
            .toLowerCase()
            .includes(keyWord.toLowerCase()))
        }
        if(!isShorts) {
            return filtered.filter((element) => element.duration <= 40);
        }
        return filtered;
    }

    //функция срабатывает при submit на поиске или чекбоксе короткометражек, 
    // фильтрует фильмы по состоянию чекбокса и ключевому слову, сохраняет в localStorage отобранные фильмы, 
    function handleSearch(keyWord, isShorts) {
        if(allMovies.length === 0) {
           getAllMovies();
        }
        //searchFilter(allMovies, keyWord, isShorts);
        let movies = searchFilter(allMovies, keyWord, isShorts);
        //console.log('movies after search ', movies);
        if (movies.length === 0) {
            setErrorSearch('Ничего не найдено');
            setMovies([]);
        } else {
            setErrorSearch('');
            setMovies(movies);
            localStorage.setItem('filteredMovies', JSON.stringify(movies));
        }
    }

    //сохраняет фильмы по нажатию на ярлык карточки в mainApi
    function handleSavedMovie(film) {
        console.log(film);
        const token = localStorage.getItem('jwt');
        //подготовка объекта фильма для записи в mainApi
        const newFilm = {};
        Object.assign(newFilm, film);
        delete newFilm.id;
        delete newFilm.created_at;
        delete newFilm.updated_at;
        delete newFilm.isSaved; //проверить!
        delete newFilm.savedMoviesId; //проверить!

        //при сохранении в mainApi уточняем свойства image, thumbnail, movieId для соответствия модели movie
        mainApi
            .saveFilm(
                {...newFilm,
                image: `https://api.nomoreparties.co/${film.image.url}`,
                thumbnail: `https://api.nomoreparties.co/${film.image.formats.thumbnail.url}`,
                movieId: film.id}, 
                token
            )
            .then((res) => {
                //setIsSaved(true);
                setSavedMoviesId(movies.data.map(a => a.movieId));
                setSavedMovies(res);
                console.log('newSavedFilms ', res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //удаляет сохраненные раннее фильмы из mainApi
    function handleRemoveMovie(_id) {
        const token = localStorage.getItem('jwt');
        console.log('id из card ', _id);
        console.log('savedMovies из бека ', savedMovies);
        // ищем id карточки с фильмом, по которой кликнули для удаления (сравниваем массивы фильмов из localStorage и из mainApi)
        const cardRemove = savedMovies.data.find(element => element.movieId === _id) ;
        console.log('movieId для удаления ', cardRemove);
        mainApi
            .deleteFilm(cardRemove._id, token)
            .then((res) => {
                console.log(movies);
                setSavedMoviesId(movies.data.map(a => a.movieId));
            })
            .catch((err) => {
                console.log(err);
            })

    }

    //делает активными ярлыки к сохраненным фильмам
    function getSavedStatus() {
       const token = localStorage.getItem('jwt');
        mainApi
            .getFilms(token)
            .then((movies) => {
                setSavedMovies(movies);
                console.log('movies ', movies.data);
                setSavedMoviesId(movies.data.map(a => a.movieId));
               
                console.log('savedMoviesId ', savedMoviesId);
            })
            .catch((err) => console.log(err));
    }

    //отрисовывает фильмы после обновления страницы
    useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('filteredMovies'));
        //console.log('movies useEffect ', movies);
        setMovies(movies || []);
        getSavedStatus();
        setIsShorts(localStorage.getItem('isShorts'));
        console.log()

    },[]);


    // useEffect(() => {
    //     if ()
    //     const movies = JSON.parse(localStorage.getItem('filteredMovies'));
    //     //console.log('movies useEffect ', movies);
    //     setMovies(movies || []);
    //     getSavedStatus();
    // })
    
    
    // useEffect(() => {
    //     if (props.loggedIn) {
    //         getSavedStatus();
    //     }
    // }, [props.loggedIn]);

    return(
        <div className="movies">
            <Header 
                loggedIn={props.loggedIn}
                className="header_white"
                textColor="navigation__menu-navlink_black" 
            />
            <SearchForm
                handleSearch={handleSearch}
                errorSearch={errorSearch}
                isShorts={isShorts}
            />
            {loading
                ? <Preloader />
                : <MoviesCardList 
                    movies={movies} 
                    
                    //для сохранения фильмов
                    handleSavedMovie={handleSavedMovie}
                    handleRemoveSavedMovie={handleRemoveMovie}
                    savedMoviesId={savedMoviesId}
                    //isSaved={isSaved}
                    />
            }
            <div className="movies__more">
                <button className="movies__btn-more">
                    Еще
                </button>
            </div>
            <Footer />
        </div>
    )
}
export default Movies;