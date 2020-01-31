import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Link, Typography } from "@material-ui/core"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh",
    width: "auto",
    flexShrink: "0"
  },
  footer: {
    with: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3, 2),
    marginTop: "auto",
  },
  navLink: {
    display: "flex",
    // justifyContent: "flex-end",
    flexDirection: "row"
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary">
          test
        </Typography>
      </footer>
    </div>
  )
}

export default Footer
