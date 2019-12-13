import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { FileUpload } from "./file-upload"
import { Box } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    with: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}))

export const Index = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <p>
        This website sole purpose is to convert docker compose files into Kubernetes
        items.
        <br />
        You can convert your docker-compose files into three simple steps:
      </p>
      <ol>
        <li>Click on the "Choose File" button.</li>
        <li>Select your docker-compose.yml file.</li>
        <li>Press submit to get your compose to kubernetes file.</li>
      </ol>
      <Box m="2rem">
        <FileUpload />
      </Box>
    </div>
  )
}
