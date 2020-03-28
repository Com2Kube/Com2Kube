import React from "react"
import renderer from "react-test-renderer"
import TermsConditions from "../pages/not-found"

it("renders correctly", () => {
  const wrapper = renderer.create(<TermsConditions />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
