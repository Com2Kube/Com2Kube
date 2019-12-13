import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Link, Typography } from "@material-ui/core"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh"
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
  }
}))

export const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" m={0.5}>
            <NavLink activeClassName="active" to="">
              Information
            </NavLink>
            <NavLink activeClassName="active" to="">
              Disclaimer
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              Contact us
            </NavLink>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {"Copyright © "}
            <Link color="inherit" href="/">
              Compose2Kube
            </Link>
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </footer>
    </div>
  )
}
