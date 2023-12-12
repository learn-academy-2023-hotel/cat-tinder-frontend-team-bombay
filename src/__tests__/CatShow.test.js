import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

import mockCats from "../mockCats"
import CatShow from "../pages/CatShow"

const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/catshow/1"]}>
            <Routes>
                <Route path="/catshow/:id" element={<CatShow cats={mockCats}/> } />
            </Routes>
        </MemoryRouter>
    )
}

describe("<CatShow />", () => {
    it("renders without crashing", () => {
        renderShow()
    })
    it("renders a cat with what a cat enjoys", () => {
        renderShow()
        expect(
            screen.getByText(mockCats[0].enjoys, { exact: false })
            ).toBeInTheDocument()
    })
})
