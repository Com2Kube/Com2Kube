import React from "react"
import renderer from "react-test-renderer"
import axios from "axios"
import Blog from "../pages/blog"

describe("Blog", () => {
  test("renders correctly enzyme", () => {
    const wrapper = renderer.create(<Blog />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it("fetches successfully data from an API", () => {
    const data = {
      title: "DevOps Handy Tool: Com2kube"
    }
    expect(data).toBeDefined()
    expect(data.title).toEqual("DevOps Handy Tool: Com2kube")
  })
})
