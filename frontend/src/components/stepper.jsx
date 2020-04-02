import React from "react"
import { useTranslation } from "react-i18next"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Typography from "@material-ui/core/Typography"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"

export default function StepperSteps() {
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
