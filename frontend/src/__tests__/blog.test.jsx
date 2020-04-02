import React from "react"
import renderer from "react-test-renderer"
import Blog from "../pages/blog"

describe("Blog", () => {
  test("renders correctly enzyme", () => {
    const wrapper = renderer.create(<Blog />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  test("return successful results", () => {
    fetchMock.get("https://dev.to/api/articles?username=com2kube", {
      title: "DevOps Handy Tool: Com2kube"
    })
    const response = fetch("https://dev.to/api/articles?username=com2kube")
    const result = response.json()
    expect(result.title).toEqual("DevOps Handy Tool: Com2kube")
  })
})
