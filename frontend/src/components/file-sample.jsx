import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import ReactGA from "react-ga"
import { Button } from "@material-ui/core"
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded"
import axios from "axios"

const SampleFile = () => {
  const [isSending, setIsSending] = useState(false)
  useEffect(() => {
    getFileSample()
  }, isSending)

  const gaEvent = () => {
    ReactGA.event({
      category: "Sample",
      action: "Downloaded a sample file"
    })
  }

  function getFileSample() {
    const urlApi = `/api/sample`
    axios({
      url: urlApi,
      method: "GET",
      responseType: "blob"
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", "docker-compose.yml")
      document.body.appendChild(link)
      link.click()
    })
    gaEvent()
  }

  const { t } = useTranslation()
  return (
    <div style={{ margin: "1.2rem" }}>
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        alt="download docker-compose"
        onClick={getFileSample}
        startIcon={<GetAppRoundedIcon />}
      >
        {t("fileSample.downloadBtn")}
      </Button>
      <p style={{ marginTop: 5, color: "#707070", fontSize: "14px" }}>
        {t("fileSample.sampleLabel")}
      </p>
    </div>
  )
}

export default SampleFile
