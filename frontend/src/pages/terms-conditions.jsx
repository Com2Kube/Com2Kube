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

const TermsConditions = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container className={classes.body}>
        <Typography align="center" variant="h4">
          {t("termsConditions.termConditionsHeader")}
        </Typography>
        <p>{t("termsConditions.conditionText1")}</p>
        <p>{t("termsConditions.conditionText2")}</p>
        <p>{t("termsConditions.conditionText3")}</p>
        <h2>{t("termsConditions.cookiesTitles")}</h2>
        <p>{t("termsConditions.cookiesText1")}</p>
        <p>{t("termsConditions.cookiesText2")}</p>
        <h2>{t("termsConditions.licenceTitle")}</h2>
        <p>{t("termsConditions.licenceText1")}</p>
        <p>{t("termsConditions.licenceText2")}</p>
        <ol>
          <li>{t("termsConditions.licenceItem1")}</li>
          <li>{t("termsConditions.licenceItem2")}</li>
          <li>{t("termsConditions.licenceItem3")}</li>
        </ol>
        <p>{t("termsConditions.licenceText3")}</p>
        <h2>{t("termsConditions.hyperlinkTitle")}</h2>
        <ol>
          <li>
            {t("termsConditions.hyperlinkItem1")}
            <ol>
              <li>{t("termsConditions.hyperlinkItem1")}</li>
              <li>{t("termsConditions.hyperlinkItem2")}</li>
              <li>{t("termsConditions.hyperlinkItem3")}</li>
              <li>{t("termsConditions.hyperlinkItem4")}</li>
              <li>{t("termsConditions.hyperlinkItem5")}</li>
            </ol>
          </li>
        </ol>
        <ol start="2">
          <li>{t("termsConditions.hyperlinkItem2")}</li>
          <li>
            {t("termsConditions.hyperlinkSub2Item1")}
            <ol>
              <li>{t("termsConditions.hyperlinkSub2Item2")}</li>
              <li>{t("termsConditions.hyperlinkSub2Item3")}</li>
              <li>{t("termsConditions.hyperlinkSub2Item4")}</li>
              <li>{t("termsConditions.hyperlinkSub2Item5")}</li>
              <li>{t("termsConditions.hyperlinkSub2Item6")}</li>
              <li>{t("termsConditions.hyperlinkSub2Item7")}</li>
              <li>{t("termsConditions.hyperlinkSub2Item8")}</li>
            </ol>
          </li>
        </ol>
        <p>{t("termsConditions.hyperlinkText1")}</p>
        <p>{t("termsConditions.hyperlinkText2")}</p>
        <p>
          {t("termsConditions.hyperlinkText3")}
          <a
            href="mailto:com2kube@gmail.com"
            title="send an email to com2kube@gmail.com"
          >
            {t("termsConditions.hyperlinkEmail")}
          </a>
          {t("termsConditions.hyperlinkText4")}
        </p>
        <p>{t("termsConditions.hyperlinkText5")}</p>
        <ol>
          <li>{t("termsConditions.hyperlinkSub3Item1")}</li>
          <li>{t("termsConditions.hyperlinkSub3Item2")}</li>
          <li>{t("termsConditions.hyperlinkSub3Item3")}</li>
        </ol>
        <p>{t("termsConditions.hyperlinkText6")}</p>
        <h2>{t("termsConditions.iFrameTitle")}</h2>
        <p>{t("termsConditions.iFrameText")}</p>
        <h2>{t("termsConditions.rightsTitle")}</h2>
        <p>{t("termsConditions.rightsText")}</p>
        <h2>{t("termsConditions.removalLinksTitle")}</h2>
        <p>{t("termsConditions.removalLinksText1")}</p>
        <p>{t("termsConditions.removalLinksText2")}</p>
        <h2>{t("termsConditions.contentLiabilityTitle")}</h2>
        <p>{t("termsConditions.contentLiabilityText")}</p>
        <h2>{t("termsConditions.disclaimerTitle")}</h2>
        <p>{t("termsConditions.disclaimerText1")}</p>
        <ol>
          <li>{t("termsConditions.disclaimerItem1")}</li>
          <li>{t("termsConditions.disclaimerItem2")}</li>
          <li>{t("termsConditions.disclaimerItem3")}</li>
          <li>{t("termsConditions.disclaimerItem4")}</li>
        </ol>
        <p>{t("termsConditions.disclaimerText2")}</p>
        <p>{t("termsConditions.disclaimerText3")}</p>
      </Container>
    </div>
  )
}

export default TermsConditions
