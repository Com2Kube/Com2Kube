import React from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Box } from "@material-ui/core"
import { Alert, AlertTitle } from "@material-ui/lab"
import SampleFile from "./file-sample"
import StepperSteps from "./stepper"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    flexDirection: "row",
    width: "100%"
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  col: {
    display: "flex",
    flexDirection: "column"
  },
  img: {
    flex: "1",
    width: "75%",
    height: "70%"
  },
  downloadBtn: {
    marginTop: "2rem",
    marginBottom: "2rem"
  }
}))

const Intro = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Container className={classes.col} maxWidth="md">
        <Alert severity="info">
          <AlertTitle>{t("index.betaTitle")}</AlertTitle>
          {t("index.betaMessage")}
        </Alert>
        <h2>{t("index.indexTitle")}</h2>
        <p>{t("index.introduction")}</p>
        <p>{t("index.steps")}</p>
        <StepperSteps />
        
      </Container>
    </div>
  )
}

export default Intro
