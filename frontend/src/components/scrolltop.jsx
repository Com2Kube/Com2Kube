import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"

const useStyles = makeStyles((theme) => ({
  root: {
    float: "right"
  }
}))

const ScrollTop = () => {
  const scrollToTop = () => {
    document.getElementById("compose_file").scrollIntoView()
    console.log("scroll to the top")
  }
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <IconButton onClick={scrollToTop} aria-label="scroll to the top">
        <ArrowUpwardIcon style={{ fontSize: 40 }} />
      </IconButton>
    </div>
  )
}

export default ScrollTop
