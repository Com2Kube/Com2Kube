import React from "react"
import "./App.css"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Header from "./themes/header"
import Index from "./components/index"
import About from "./components/about"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
