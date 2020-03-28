import React from "react"
import renderer from "react-test-renderer"
import NotFound from "../pages/not-found"

it("renders correctly", () => {
  const wrapper = renderer.create(<NotFound />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
