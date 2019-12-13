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
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
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
        <Box variant="body1" m={0.5}>
          <Link
            component={NavLink}
            className={classes.navLink}
            activeClassName="active"
            to="/about"
          >
            Information
          </Link>
          <Link
            component={NavLink}
            className={classes.navLink}
            activeClassName="active"
            to="/about"
          >
            Disclaimer
          </Link>
          <Link
            component={NavLink}
            className={classes.navLink}
            activeClassName="active"
            to="/about"
          >
            About
          </Link>
          <Link
            component={NavLink}
            className={classes.navLink}
            activeClassName="active"
            to="/contact"
          >
            Contact us
          </Link>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {"Copyright© "}
          <Link color="inherit" href="/">
            Compose2Kube&nbsp;
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </footer>
    </div>
  )
}

export default Footer
