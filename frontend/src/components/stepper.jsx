import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Typography from "@material-ui/core/Typography"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

export default function StepperSteps() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="large" />}
      aria-label="breadcrumb"
    >
      <Typography color="textPrimary">{t("index.step1")}</Typography>
      <Typography color="textPrimary">{t("index.step2")}</Typography>
      <Typography color="textPrimary">{t("index.step3")}</Typography>
    </Breadcrumbs>
  )
}
