import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2)
  },
  body: {
    margin: theme.spacing(5, 2),
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
        {/* image */}
        <Typography variant="h5">How is this app different from Kompose?</Typography>
        <p>
          We are fully aware that the functionality of our app is existent with
          Kompose CLI.
          <br />
          We aim to make it easier for everyone by making it into a Web App. Where as
          Kompose is only a cli tool that you have to download. We are actually using
          Kompose in the background. The difference, we allow people to do get their
          files from anywhere.
        </p>
        <Typography variant="h5">Do we save your docker-compose file?</Typography>
        <p>The answer is no, we don't</p>
        <p>
          Currently, Com2kube does not have any database. That being said, we don't
          store anywhere your submitted docker-compose file. Once you're files are
          submitted and your response is displayed, they are immediately deleted on
          the backend side.
        </p>
        {/* image */}
      </div>
    </div>
  )
}

export default About
