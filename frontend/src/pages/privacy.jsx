import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import { Container, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  body: {
    margin: theme.spacing(6, 5),
    minWidth: "10%",
    padding: theme.spacing(5, 2)
  }
}))

const Privacy = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container className={classes.body}>
        <Typography variant="h5">{t("privacy.introTitle")}</Typography>
        <p>{t("privacy.introText1")}</p>
        <p>{t("privacy.introText2")}</p>
        <Typography variant="h5">{t("privacy.websiteTitle")}</Typography>
        <p>{t("privacy.websiteText1")}</p>
        <p>{t("privacy.websiteText2")}</p>
        <Typography variant="h5">{t("privacy.personalInfoTitle")}</Typography>
        <p>{t("privacy.personalText1")}</p>
        <Typography variant="h5">{t("privacy.securityTitle")}</Typography>
        <p>{t("privacy.securityText1")}</p>
        <Typography variant="h5">{t("privacy.advertisementsTitle")}</Typography>
        <p>{t("privacy.advertisementsText1")}</p>
        <Typography variant="h5">{t("privacy.externalSitesTitle")}</Typography>
        <p>{t("privacy.externalSitesText1")}</p>
        <p>{t("privacy.externalSitesText2")}</p>
        <Typography variant="h5">{t("privacy.statsTitle")}</Typography>
        <p>{t("privacy.statsText")}</p>
        <Typography variant="h5">{t("privacy.privacyTitle")}</Typography>
        <p>{t("privacy.privacyText")}</p>
      </Container>
    </div>
  )
}

export default Privacy
