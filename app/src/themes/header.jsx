import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Toolbar, Typography, Container, Link } from "@material-ui/core"
import kubernetes from "../assets/images/kubernetes_logo.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    with: "100%",
    display: "flex"
  },
  logo: {
    width: "5%",
    margin: theme.spacing(2)
  },
  navLinks: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row"
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar>
        <img className={classes.logo} src={kubernetes} alt="kubernetes logo" />
        <Typography variant="h6">
          <Link href="/" style={{ textDecoration: "none" }}>
            Compose2kube
          </Link>
        </Typography>
        <Container className={classes.navLinks}>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button
            color="inherit"
            onClick={() =>
              window.open("https://github.com/CB-GJ/Compose2Kube", "_blank")
            }
          >
            Github
          </Button>
        </Container>
      </Toolbar>
    </div>
  )
}

export default Header
