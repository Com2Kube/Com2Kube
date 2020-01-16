import React from "react"
import axios from "axios"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import FileUpload from "../src/components/file-upload"

jest.mock("axios")

describe("File upload unit test", () => {
  it("file-upload component should render correctly", () => {
    const wrapper = shallow(<FileUpload />)
    expect(wrapper).toMatchSnapshot()
  })

  it("it returns data when onFormSubmit is called", () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ status: 200, data: { data } })
    )
  })

  it("it fetches all the data back", () => {
    const getSpy = jest.spyOn(axios, "get")
    const wrapper = shallow(<FileUpload />)
    expect(getSpy).toBeCalled()
  })

  it("it returns bad response", () => {})
})
