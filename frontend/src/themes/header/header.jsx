import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography, Container, Link } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import logoCom2kube from "../../assets/images/logo_transparent.png"
import i18n from "../../i18n"
import Logo from "./style"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    with: "100%",
    display: "flex"
  },
  nameLogo: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
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
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Container className={classes.nameLogo}>
        <Link href="/">
          <Logo src={logoCom2kube} alt="com2kube logo" />
        </Link>
        <Typography variant="h6">
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#5FABC2",
              justifyContent: "flex-start"
            }}
          >
            Com2kube
          </Link>
        </Typography>
      </Container>
      <Container className={classes.navLinks}>
        <Button color="inherit" href="/about">
          {t("about.menu")}
        </Button>
        <Button
          color="inherit"
          onClick={() => window.open("https://github.com/CB-GJ/Com2Kube", "_blank")}
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
    </div>
  )
}

export default Header
