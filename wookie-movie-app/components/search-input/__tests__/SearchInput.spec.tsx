import React from "react"
import {render, RenderResult,fireEvent} from "@testing-library/react"
import SearchInput from "../SearchInput"

let document
describe("Search Input", () => {
    beforeEach(() => {
        document = render(<SearchInput />);
      });
})
it("true to true", ()=> {
    expect(true).toBe(true)
})