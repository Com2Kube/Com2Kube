import React from "react"
import renderer from "react-test-renderer"
import Blog from "../pages/blog"

describe("Blog", () => {
  test("renders correctly enzyme", () => {
    const wrapper = renderer.create(<Blog />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
