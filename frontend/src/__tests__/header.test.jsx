import React, { Suspense } from "react"
import renderer from "react-test-renderer"
import Header from "../themes/header/header"

describe("Header", () => {
  it("renders correctly", () => {
    const wrapper = renderer
      .create(
        <Suspense fallback={<div>Loading..</div>}>
          <Header />
        </Suspense>
      )
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
