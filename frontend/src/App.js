import React, { Suspense, useEffect } from "react"
import "./App.css"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import ReactGA from "react-ga"
import Header from "./themes/header/header"
import Footer from "./themes/footer/footer"
import Index from "./pages/index"
import About from "./pages/about/about"
import Privacy from "./pages/privacy"
import NotFound from "./pages/not-found"
import TermsConditions from "./pages/terms-conditions"
import Blog from "./pages/blog"

function App() {
  useEffect(() => {
    // Making sure we dont mix prod and dev analytic data
    if (window.location.hostname === "com2kube.io") {
      ReactGA.initialize("UA-156694657-2")
      // To Report Page View
      ReactGA.pageview(window.location.pathname + window.location.search)
    } else {
      ReactGA.initialize("UA-156694657-1")
      // To Report Page View
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [])

  return (
    <div className="App">
      <Suspense fallback="loading">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/privacy-policy" component={Privacy} />
            <Route path="/terms-and-conditions" component={TermsConditions} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </div>
  )
}

export default App
