import React from "react"
import renderer from "react-test-renderer"
import Index from "../pages/index"

it("renders correctly enzyme", () => {
  const wrapper = renderer.create(<Index />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
