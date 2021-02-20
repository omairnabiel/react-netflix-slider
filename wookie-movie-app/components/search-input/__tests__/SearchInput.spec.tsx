import React from "react"
import {render, RenderResult,fireEvent} from "@testing-library/react"
import SearchInput from "../SearchInput"
import { MovieService } from "../../../service/movie.service"

// mocking recoiljs hooks
jest.mock('recoil', () => ({
    useRecoilState: () => [[],jest.fn()],
    atom: jest.fn().mockReturnValue({key:"movies", default:{loading:false, data: [], error: undefined}})

}));

// mock service functions
jest.mock("../../../service/movie.service").fn(() => ({
    get: ()=>{}
}))


let document: RenderResult
describe("Search Input", () => {
    beforeEach(() => {
        document = render(<SearchInput />);
    })

    it("placeholder value must be Search Moviess", ()=> {
        expect(document.getByPlaceholderText("Search Movies")).toBeTruthy()
    })

    it("should update search input value when typed", () => {
        const input = document.getByPlaceholderText("Search Movies") as HTMLInputElement
        fireEvent.change(input, {target:{value: "the dark knight"}})
        expect(input.value).toEqual("the dark knight")
    })

    it("should call MovieService.get when input value is changed", async() => {
        const input = document.getByPlaceholderText("Search Movies")
        const getMoviesSpy = spyOn(MovieService,"get")
        fireEvent.change(input, {target:{value: "t"}})
        await new Promise((resolve) => setTimeout(() => resolve(1),1000))
       expect(getMoviesSpy).toHaveBeenCalled()
    })

})
