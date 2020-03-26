// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect"
import Enzyme from "enzyme"
import toJson from "enzyme-to-json"
import Adapter from "enzyme-adapter-react-16"

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() })

// If you're using the fetch API
import fetch from "node-fetch"
global.fetch = fetch
