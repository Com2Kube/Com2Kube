import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Link, Typography } from "@material-ui/core"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    flexShrink: "0"
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3, 2),
    marginTop: "auto"
  },
  navLink: {
    margin: theme.spacing(1, 1)
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Box variant="body1" m={0.5}>
          <Link
            color="textSecondary"
            component={NavLink}
            className={classes.navLink}
            activeClassName="active"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            color="textSecondary"
            component={NavLink}
            className={classes.navLink}
            activeClassName="active"
            to="/about"
          >
            About
          </Link>
          <Link
            color="textSecondary"
            component={NavLink}
            className={classes.navLink}
            activeClassName="active"
            to="https://github.com/CB-GJ/Com2Kube"
          >
            Github
          </Link>
        </Box>
        <Typography variant="body2" color="textSecondary" m={0.2}>
          Version: 0.2.0
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {"Copyright© "}
          <Link color="inherit" href="/">
            Com2Kube&nbsp;
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </footer>
    </div>
  )
}

export default Footer
