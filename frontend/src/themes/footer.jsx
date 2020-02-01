import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link, Typography } from "@material-ui/core"

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
          Version: 0.1.0
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
