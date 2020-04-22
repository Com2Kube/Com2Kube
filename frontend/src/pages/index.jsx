import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Container } from "@material-ui/core"
import FileUpload from "../components/file-upload"
import SampleFile from "../components/file-sample"
import Intro from "../components/intro"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  downloadBtn: {
    textAlign: "center"
  }
}))

const Index = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container>
        <Intro />
      </Container>
      <Box m="2rem">
        <FileUpload id="file-upload" />
      </Box>
      <Box className={classes.downloadBtn}>
          <SampleFile />
        </Box>
    </div>
  )
}

export default Index
