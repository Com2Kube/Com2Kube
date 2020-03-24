import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Container } from "@material-ui/core"
import { Alert, AlertTitle } from "@material-ui/lab"
import { useTranslation } from "react-i18next"
import SampleFile from "../components/file-sample"
import FileUpload from "../components/file-upload"
import StepperSteps from "../components/stepper"
import Intro from "../components/intro"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "8vh"
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    padding: "2vh"
  },
  li: {
    listStyle: "none"
  }
}))

const Index = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      <Alert severity="info">
        <AlertTitle>{t("index.betaTitle")}</AlertTitle>
        {t("index.betaMessage")}
        <SampleFile />
      </Alert>
      <Container className={classes.text}>
        <Intro />
        <h2>3 simple steps</h2>
        <StepperSteps />
        <span>{t("index.disclaimer")}</span>
      </Container>
      <Box m="2rem">
        <FileUpload id="file-upload" />
      </Box>
    </div>
  )
}

export default Index
