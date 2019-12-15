import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  root: {
    with: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}))

const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <p>About component</p>
    </div>
  )
}

export default About
