import { atom } from "recoil"

// types
import { Movie } from "../../../shared/types/movie"

interface MoviesAtom {
    loading: boolean | undefined,
    data: Array<Movie>| [],
    error: string | undefined
}

export const moviesState = atom<MoviesAtom>({
    key: 'movies',
    default: {
        loading: undefined,
        data: [],
        error: undefined
    }
})


interface MovieAtom {
    loading: boolean | undefined,
    data: Movie | undefined,
    error: string | undefined
}

export const selectedMovie = atom<MovieAtom>({
    key: 'current-movie',
    default: {
        loading: false,
        data: undefined,
        error: undefined

    }
})