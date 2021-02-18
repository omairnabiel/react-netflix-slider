import axios from "axios"

import { config } from "../config"

// types
import { Movie, MovieResponse } from "../shared/types/movie"
 
export const get = async (searchTerm? :string): Promise<Movie[]> => {
    const response = await axios.get<MovieResponse>(`${config.BASE_URL}/movies?q=${searchTerm}`, {
        // an intercpetor should be used for larger applications
          headers: {
              'Authorization' : 'Bearer Wookie2019'
          }
    })   
    if(!response) throw Error("Cannot fetch Movies")
    return response.data.movies
}