import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue } from  "recoil"
import { useRouter } from "next/router"

//  components
import Poster from "../../../components/poster/Poster"
import Loader from "../../../components/loader/Loader"
import MovieDetail from "../../../components/movie-detail/MovieDetail"


// state atoms
import {selectedMovie} from "../../../state/atoms/movie"
import { moviesState } from "../../../state/atoms/movie"

export default function Detail() {
    const [movie, setMovie] = useRecoilState(selectedMovie)
    const movies = useRecoilValue(moviesState)
    const router = useRouter()
    
    /**
     * In useEffect as searchBar has already made an api request to get movies, we listen on movies data
     */
    useEffect(() => {
        console.log("Use Effect")
        if(!movie.data && movies.data) {
            setMovie({data: movies.data.find(m => m.id === router.query.id), loading: false, error: undefined})
        }
    },[movies.data])


    return (
        movie.data ?
        <figure className="md:flex bg-gray-600 rounded-xl p-8 md:p-0 shadow-xl ml-5 mr-5">
            <Poster url={movie.data.poster}/>
            <MovieDetail movie={movie.data}/>
        </figure>
      :
      <Loader/>
    )
}