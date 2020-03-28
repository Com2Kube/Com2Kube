import React from "react"
import renderer from "react-test-renderer"
import About from "../pages/about/about"

it("renders correctly", () => {
  const wrapper = renderer.create(<About />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
