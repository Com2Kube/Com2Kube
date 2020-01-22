import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Toolbar, Typography, Container, Link } from "@material-ui/core"
import logo from "../assets/images/logo_transparent.png"
import i18n from "../i18n"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    with: "100%",
    display: "flex"
  },
  logo: {
    width: "5%",
    minWidth: "10%",
    margin: theme.spacing(2)
  },
  langIcon: {
    width: "5%",
    padding: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  navLinks: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row"
  }
}))

function Header() {
  const [isHidden, isHiddenState] = useState(false)
  const classes = useStyles()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const langState = (lang) => {
    changeLanguage(lang)
    isHiddenState(!isHidden)
  }

  return (
    <div className={classes.root}>
      <Toolbar>
        <img className={classes.logo} src={logo} alt="com2kube logo" />
        <Typography variant="h6">
          <Link href="/" style={{ textDecoration: "none", color: '#5FABC2' }}>
            Com2kube
          </Link>
        </Typography>
        <Container className={classes.navLinks}>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button
            color="inherit"
            onClick={() =>
              window.open("https://github.com/CB-GJ/Com2Kube", "_blank")
            }
          >
            Github
          </Button>
          {isHidden ? (
            <Button
              onClick={() => {
                langState("en")
              }}
              type="button"
              alt="english lang"
              className={classes.button}
            >
              English
            </Button>
          ) : (
            <Button
              onClick={() => {
                langState("fr")
              }}
              type="button"
              alt="french lang"
              className={classes.button}
            >
              French
            </Button>
          )}
        </Container>
      </Toolbar>
    </div>
  )
}

export default Header
