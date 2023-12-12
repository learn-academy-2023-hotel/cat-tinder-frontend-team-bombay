import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import mockCats from "../mockCats"
import CatIndex from "../pages/CatIndex"

const renderIndex = () => {
    render(
        <BrowserRouter>
            <CatIndex cats={mockCats} />
        </BrowserRouter>
    )
}
describe("CatIndex />", () => {
    it("renders without crashing", () => {
    renderIndex()
    })

    it("render cat cards", () => {
        renderIndex()
        mockCats.forEach((cat) => {
            const catName = screen.getByText(cat.name)
            expect(catName).toBeInTheDocument()
        })
    })
})


