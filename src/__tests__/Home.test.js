import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)

    const homeElement = screen.getByText(/home/i)
    expect(homeElement).toBeInTheDocument()
  })

  it("renders an image with a src", () => {
    render(
        <BrowserRouter>
            < Home />
        </BrowserRouter>
    )
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", "https://as2.ftcdn.net/v2/jpg/03/03/62/45/1000_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg")
  })
})