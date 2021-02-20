import React from "react"
import {render, RenderResult,fireEvent} from "@testing-library/react"
import SearchInput from "../SearchInput"

// mocking recoiljs hooks
jest.mock('recoil', () => ({
    useRecoilState: () => [[],jest.fn()],
    atom: jest.fn().mockReturnValue({key:"movies", default:{loading:false, data: [], error: undefined}})

}));




let document: RenderResult
describe("Search Input", () => {
    it("placeholder value must be Search Movies", ()=> {
        document = render(<SearchInput />);
        expect(document.getByPlaceholderText('Search Movies')).toBeInTheDocument();
    })
})
