import {render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import CatEdit from '../pages/CatEdit'
import mockCats from "../mockCats"

const renderEdit = () => {
    render(
        <MemoryRouter initialEntries={["/catedit/1"]}>
        <Routes>
            <Route path="/catedit/:id" element={<CatEdit cats={mockCats}/> } />
        </Routes>
    </MemoryRouter>
    )
}

describe('<CatEdit />', () => {

    it("renders an edit form", () => {
        renderEdit()
        screen.logTestingPlaygroundURL()
        const nameInput = screen.getByRole("textbox", {
            name: /name/i       
         })
         expect(nameInput).toBeInTheDocument()

         const enjoysInput = screen.getByRole("textbox", {
            name: /enjoys/i
         })
         expect(enjoysInput).toBeInTheDocument()
    })
})