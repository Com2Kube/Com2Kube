import React from "react"
import "./App.css"
import { Header } from "./themes/header"
import { Footer } from "./themes/footer"
import { Index } from "./components/index"
import { About } from "./components/about"
import { Contact } from "./components/contact-us"
import { NotFound } from "./pages/NotFound"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
