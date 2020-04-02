import React from "react"
import renderer from "react-test-renderer"
import Footer from "../themes/footer/footer"

describe("Footer", () => {
  it("renders correctly", () => {
    const wrapper = renderer.create(<Footer />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
