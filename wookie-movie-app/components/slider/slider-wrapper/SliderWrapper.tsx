import React from "react"

import { useRecoilValue } from "recoil"
import { groupBy,Dictionary } from "lodash"

//types
import { Movie } from "../../../shared/types/movie"

// components
import Slider from "../Slider"
import Loader from "../../loader/Loader"

// state atoms
import { moviesState } from "../../../state/atoms/movie"

export default function SliderWrapper() {
    const movies = useRecoilValue(moviesState)

    const groupMoviesByGenre = (movies: Movie[]): Dictionary<Movie[]> => {
        return (groupBy(movies,'genres'))
    }

    const children: JSX.Element[] = []

    const renderMovies = () => {
        if(movies.data.length > 0) {
            for(const [key,value] of  Object.entries(groupMoviesByGenre(movies.data))) {
             children.push(<Slider key={key} movies={value} genre={key} />)
            }
         }
         return children
    }

    return (
    movies.loading ?
        <Loader />
        :
       <div>
           {renderMovies()}
       </div>
    )
}