import React from "react"
import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom"
import Footer from "../themes/footer/footer"

describe("Footer", () => {
  it("renders correctly", () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
