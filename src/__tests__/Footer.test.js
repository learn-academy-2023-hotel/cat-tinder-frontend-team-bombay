import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../Components/Footer"


describe("<Footer />", () => {
    it("renders without crashing", () => {
        render(
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        )
      })
      const footerElement = screen.getByText(/footer/i)
      expect(footerElement).toBeInTheDocument()
})