import React from "react"
import renderer from "react-test-renderer"
import Header from "../themes/header/header"

describe("Header", () => {
  it("renders correctly", () => {
    const wrapper = renderer.create(<Header />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
