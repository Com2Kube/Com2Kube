import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import FileUpload from "../components/file-upload"

const useStyles = makeStyles((theme) => ({
  root: {
    with: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    justifyContent: "center",
    margin: "auto",
    padding: "2vh"
  }
}))

const Index = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      <Box className={classes.text}>
        <p>{t("index.introduction")}</p>
        <p>{t("index.steps")}</p>
        <ol>
          <li>{t("index.step1")}</li>
          <li>{t("index.step2")}</li>
          <li>{t("index.step3")}</li>
        </ol>
      </Box>
      <Box m="2rem">
        <FileUpload />
      </Box>
    </div>
  )
}

export default Index
