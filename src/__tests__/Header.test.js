import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
//import userEvent from "@testing-library/user-event"
import Header from "../components/Header"


describe("<Header />", () => {
    it("renders without crashing", () => {
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        )
      })
      const headerElement = screen.getByText(/header/i)
      expect(headerElement).toBeInTheDocument()
})

