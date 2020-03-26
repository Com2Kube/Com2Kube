import React from "react"
import { shallow } from "enzyme"
import Index from "../pages/index"

it("renders correctly enzyme", () => {
  const wrapper = shallow(<Index />)

  expect(toJson(wrapper)).toMatchSnapshot()
})
