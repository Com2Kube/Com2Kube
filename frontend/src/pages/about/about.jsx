import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import { Typography, Container } from "@material-ui/core"
import faq from "../../assets/images/faq.svg"
import solution from "../../assets/images/solution.svg"
import claire from "../../assets/images/claire.png"
import gabriel from "../../assets/images/gabriel.png"
import { AvatarResponsive, AvatarCenter, AvatarItem } from "./style"

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
  avatarImg: {
    margin: theme.spacing(5, 4)
  },
  img: {
    flex: "1",
    width: "90%",
    height: "100%",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    marginLeft: theme.spacing(3)
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: theme.spacing(5, 0)
  },
  item: {
    flexGrow: 3,
    display: "flex",
    flexDirection: "column",
    width: "500px",
    margin: theme.spacing(5),
    padding: theme.spacing(4)
  }
}))

const About = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Container>
          <AvatarCenter>
            <AvatarItem>
              <AvatarResponsive
                alt="Claire"
                src={claire}
                className={classes.avatarImg}
              />
              <span>
                <b>Claire</b> • {t("about.frontendDev")}
              </span>
            </AvatarItem>
            <AvatarItem>
              <AvatarResponsive
                alt="Gab"
                src={gabriel}
                className={classes.avatarImg}
              />
              <span>
                <b>Gabriel</b> • {t("about.backendDev")}
              </span>
            </AvatarItem>
          </AvatarCenter>
          <Typography variant="h4" align="justify">
            {t("about.teamHeader")}
          </Typography>
          <p>{t("about.item1")}</p>
          <p>{t("about.item2")}</p>
          <p>{t("about.item3")}</p>
          <p>{t("about.item4")}</p>
        </Container>
        <div className={classes.container}>
          <AvatarCenter>
            <img src={faq} className={classes.img} alt="FAQ" />
          </AvatarCenter>
          <div className={classes.item}>
            <Typography variant="h5">{t("about.faq1")}</Typography>
            <p>{t("about.faq1Text1")}</p>
            <p>{t("about.faq1Text2")}</p>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.item}>
            <Typography variant="h5">{t("about.faq2")}</Typography>
            <p>{t("about.faq2Text1")}</p>
            <p>{t("about.faq2Text2")}</p>
          </div>
          <AvatarCenter>
            <img src={solution} className={classes.img} alt="solution" />
          </AvatarCenter>
        </div>
      </div>
    </div>
  )
}

export default About
