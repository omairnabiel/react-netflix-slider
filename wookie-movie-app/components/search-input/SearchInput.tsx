import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faSearch } from "@fortawesome/free-solid-svg-icons"
import { ChangeEvent, useEffect, useState,useRef } from "react"
import { useRecoilState } from "recoil"
import { debounce} from "lodash"

// state atoms
import { moviesState } from "../../state/atoms/movie"

// service
import { get } from "../../service/movie.service"

export default function SearchInput() {
    const [value,setValue] = useState<string>("")
    const [movies, setMovies] = useRecoilState(moviesState)
    
    // debounce getMovies, to avoid calling the api on each input
    const getMoviesDebounced = useRef(debounce(getMovies, 1000)).current

    async function getMovies(searchTerm: string) {
      setMovies({data: [], loading: true, error: undefined})
      const data = await get(searchTerm)
      setMovies({data, loading: false, error: undefined})
  }

    useEffect(() => {
      if(movies.data.length === 0) {
        setMovies({data: [], loading: true, error: undefined})
        getMoviesDebounced(value)
      }
    
    }, [value])


    return (    
 <div className="relative flex w-full flex-wrap items-stretch mb-3">
  <input 
    type="text" 
    placeholder="Search Movies" 
    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }}
  />
  <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
    <i className="fas fa-user"><FontAwesomeIcon icon={faSearch}/></i>
  </span>
</div>
    
    )
}