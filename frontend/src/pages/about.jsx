import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles((theme) => ({
  root: {
    with: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2)
  },
  body: {
    margin: theme.spacing(5),
    minWidth: "10%"
  }
}))

const About = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <p>{t("about.item1")}</p>
        <p>{t("about.item2")}</p>
        <p>{t("about.item3")}</p>
        <p>{t("about.item4")}</p>
      </div>
    </div>
  )
}

export default About
