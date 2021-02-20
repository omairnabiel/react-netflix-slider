import React, { CSSProperties } from "react"
import { render, fireEvent } from "@testing-library/react"

import Tile from "../Tile"
import { Movie } from "../../../shared/types/movie";



// mocking recoiljs hooks
jest.mock('recoil', () => ({
    useSetRecoilState: () => jest.fn(),
    atom: jest.fn().mockReturnValue({key:"movies", default:{loading:false, data: {}, error: undefined}})
}));

// mocking next/router
const routerPushFn = {
    push: ()=>{}
}
jest.mock("next/router", ()=> ({
    useRouter: jest.fn().mockReturnValue(routerPushFn),
    Router: { push: jest.fn()}
}))




// data stubs
const movie: Movie = {
    id: "1",
    imdb_rating: 9,
    length: "1h",
    overview: "lorem",
    poster: "lorem",
    released_on: `${new Date()}`,
    slug: "movie",
    title: "test movie",
    backdrop: "link",
    cast: ["Actor1", "Actor2"],
    genres: ["Drama", "Crime"],
    director: "Jon Snow",
    classification: "18+"

}
const transform: CSSProperties = {transform: ""}



describe("Tile Component (Movies in the slider)", ()=> {
    it("should call route function on click with movie id", async () => {
        const document = render(<Tile movie={movie} transform={transform}/>)
        const tile =  document.getByTestId("movie-tile")
        const routerSpy = spyOn(routerPushFn,"push")
        fireEvent.click(tile)
        await new Promise((resolve) => setTimeout(()=>resolve(1),100))
        expect(routerSpy).toHaveBeenCalledWith(`/detail/${movie.id}`)

    })
})