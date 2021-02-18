export interface Movie {
    id: string
    imdb_rating: number,
    length: string,
    overview: string,
    poster: string,
    released_on: string,
    slug: string,
    title: string
    backdrop: string,
    cast: Array<string>,
    genres: Array<string>,
    director: string,
    classification: string
}

export interface MovieResponse {
    movies : Array<Movie>
}
