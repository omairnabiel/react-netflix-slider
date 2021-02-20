import { format } from "date-fns"

// types
import { Movie } from "../../shared/types/movie"

// components
import Ratings from "../ratings/Ratings"

interface MovieDetailProps {
    movie: Movie
}

import React from "react"

export default function MovieDetail({movie}: MovieDetailProps) {

    return (
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <div className="flex flex-row justify-between">
            <div className="text-lg font-semibold">{movie.title}</div>
            <div className="ml-8">
                <Ratings filled={movie.imdb_rating}/>
            </div>
            </div>
            <div>{format( new Date(movie.released_on), "yyyy")} | {movie.length} | {movie.director}</div>
            <div><strong>Cast</strong> {movie.cast.join(", ")}</div>

            <div>
                <strong>Plot</strong>
                <p>{movie.overview}</p>
            </div>
        </div>

    )
}