import React from "react"
import FileSyncImg from "../assets/images/file-sync.svg"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
// import overlayImg from "../assets/illustrations/overlay.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
    // backgroundImage: `url(${overlayImg})`
  },
  img: {
    flex: "1",
    width: "100%",
    height: "100%"
  },
  startedBtn: {
    padding: "18px 36px",
    borderRadius: "61px",
    boxShadow: "inset 0 0 0 2px #474E51",
    transition:
      "300ms box-shadow cubic-bezier(0.4, 0, 0.6, 1), 300ms background-color cubic-bezier(0.4, 0, 0.6, 1) 300ms color cubic-bezier(0.4, 0, 0.6, 1)",
    color: "#474E51",
    "&:hover": {
      boxShadow: "inset 0 0 0 4px #5778F3",
      color: "#5778F3"
    }
  }
}))

const Intro = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={2} wrap="wrap">
        <Grid item xs={6}>
          <h2>What is Com2kube?</h2>
          <p>{t("index.introduction")}</p>
          <p>{t("index.steps")}</p>
          <button className={classes.startedBtn}>Get Started</button>
        </Grid>
        <Grid item xs={6}>
          <img src={FileSyncImg} alt="file sync" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Intro
