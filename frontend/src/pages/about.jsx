import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import { Typography, Avatar, Container } from "@material-ui/core"
import faq from "../assets/images/faq.svg"
import solution from "../assets/images/solution.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2)
  },
  body: {
    margin: theme.spacing(6, 3),
    minWidth: "10%"
  },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(5, 2)
  },
  img: {
    flex: "1",
    width: "100%",
    margin: theme.spacing(2)
  },
  container: {
    display: "flex",
    flexWrap: "row",
    margin: theme.spacing(5, 0)
  },
  pull: {
    flexGrow: 3
  },
  avatarCenter: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }
}))

const About = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Container>
          <div className={classes.avatarCenter}>
            <Avatar alt="Claire" src="" className={classes.avatar} />
            <Avatar alt="Gab" src="" className={classes.avatar} />
          </div>
          <Typography variant="h4" align="justify">
            The Team
          </Typography>
          <p>{t("about.item1")}</p>
          <p>{t("about.item2")}</p>
          <p>{t("about.item3")}</p>
          <p>{t("about.item4")}</p>
        </Container>
        <Container className={classes.container}>
          <div className={classes.pull}>
            <Typography variant="h5">
              How is this app different from Kompose?
            </Typography>
            <p>
              We are fully aware that the functionality of our app is existent with
              Kompose CLI.
              <br />
              We aim to make it easier for everyone by making it into a Web App.
              Where as Kompose is only a cli tool that you have to download. We are
              actually using Kompose in the background. The difference, we allow
              people to do get their files from anywhere.
            </p>
          </div>
          <div>
            <img src={faq} className={classes.img} />
          </div>
        </Container>
        <Container className={classes.container}>
          <div>
            <img src={solution} className={classes.img} />
          </div>
          <div className={classes.pull}>
            <Typography variant="h5">
              Do we save your docker-compose file?
            </Typography>
            <p>The answer is no, we don't</p>
            <p>
              Currently, Com2kube does not have any database. That being said, we
              don't store anywhere your submitted docker-compose file. Once you're
              files are submitted and your response is displayed, they are
              immediately deleted on the backend side.
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default About
