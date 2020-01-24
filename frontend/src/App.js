import React, { Suspense } from "react"
import "./App.css"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Header from "./themes/header"
import Index from "./pages/index"
import About from "./pages/about"
import NotFound from "./pages/not-found"

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
