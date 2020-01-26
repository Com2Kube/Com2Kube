import React, { Suspense, useEffect } from "react"
import "./App.css"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import ReactGA from "react-ga"
import AdSense from "react-adsense"
import Header from "./themes/header/header"
import Index from "./pages/index"
import About from "./pages/about"
import NotFound from "./pages/not-found"

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-156694657-1")
    // To Report Page View
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="App">
      <Suspense fallback="loading">
        <Router>
          <Header />
          <AdSense.Google client="ca-pub-3056643200641173" slot="7806394673" />
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
