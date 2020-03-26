import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Container } from "@material-ui/core"
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
    marginTop: "2vh"
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
  return (
    <div className={classes.root}>
      <Container className={classes.text}>
        <Intro />
        <StepperSteps />
      </Container>
      <Box m="2rem">
        <FileUpload id="file-upload" />
      </Box>
    </div>
  )
}

export default Index
