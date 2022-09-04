import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";

function MoviesCardList(props) {
    console.log('MoviesList ', props.movies);
    // const [isLiked, setIsLiked] = useState(false);

    // function handleSavedMovie() {
    //     setIsLiked(true);
    //     console.log('ok');
    // }

    //const filtredMovies = props.movies;
    //const filteredMoviesId = filtredMovies.map(a => a.id);
    

    return(
        <div className="movies-cardlist">
            {/* <span className="movies-cardlist__error">{props.errorSearch}</span> */}
            {props.movies.map((movie) => (
                 <MoviesCard
                    key={movie.id}
                    {...movie}
                    //для сохранения фильмов
                    onSavedMovie={props.handleSavedMovie}
                    onRemoveMovie={props.handleRemoveMovie}
                    savedMoviesId={props.savedMoviesId}
                    //если в массиве id сохраненных фильмов есть id карточки, то метод indexOf вернет значение, если нет, то -1
                    isSaved={props.savedMoviesId.indexOf(movie.id) !== -1 }

                 />
            ))}
           
        </div>
    )
}
export default MoviesCardList;