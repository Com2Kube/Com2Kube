import React from "react"
import renderer from "react-test-renderer"
import App from "../App"

it("renders correctly", () => {
  const wrapper = renderer.create(<App />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
