import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Container } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import i18n from "../../../i18n"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: "#274595",
    fontWeight: "bold"
  },
  navLinks: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    minWidth: "1px",
    color: "#274595"
  },
  navText: {
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}))

const Links = () => {
  const classes = useStyles()
  const [isHidden, isHiddenState] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const langState = (lang) => {
    changeLanguage(lang)
    isHiddenState(!isHidden)
  }
  const { t } = useTranslation()

  return (
    <Container className={classes.navLinks}>
      <Button color="inherit" href="/about" className={classes.navText}>
        {t("about.menu")}
      </Button>
      <Button color="inherit" href="/blog" className={classes.navText}>
        {/* TODO: update Blog */}
        Blog
      </Button>
      <Button
        className={classes.navText}
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
  )
}

export default Links
