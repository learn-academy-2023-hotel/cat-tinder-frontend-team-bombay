import { render } from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)

    const homeElement = screen.getByText(/home/i)
    expect(homeElement).toBeInTheDocument()
  })

  it("renders an image without crashing", () => {
    render(
        <BrowserRouter>
            < Home />
        </BrowserRouter>

    )
  })
})