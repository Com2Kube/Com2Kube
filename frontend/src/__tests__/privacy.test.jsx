import React from "react"
import renderer from "react-test-renderer"
import Privacy from "../pages/privacy"

describe("Privacy", () => {
  it("renders correctly", () => {
    const wrapper = renderer.create(<Privacy />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
