import React from "react"
import renderer from "react-test-renderer"
import About from "../pages/about/about"

describe("About", () => {
  it("renders correctly", () => {
    const wrapper = renderer.create(<About />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
