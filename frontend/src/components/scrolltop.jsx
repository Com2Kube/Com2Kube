import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  buttonTop: {
    display: "block",
    height: "300px",
    width: "300px",
    borderRaius: "50%",
    border: "1px solid red"
  }
}))

const ScrollTop = () => {
  const classes = useStyles()
  return <button className={classes.buttonTop}>+</button>
}

export default ScrollTop
