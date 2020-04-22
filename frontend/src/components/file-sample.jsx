import React from "react"
import ReactGA from "react-ga"
import { Button } from "@material-ui/core"
import { withTranslation } from "react-i18next"
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded"
import axios from "axios"

const useStyles = () => ({
  root: {
    margin: "1.2rem"
  }
})

class SampleFile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getFileSample = this.getFileSample.bind(this)
    this.gaEvent = this.gaEvent.bind(this)
  }

  getFileSample() {
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
    this.gaEvent()
  }

  gaEvent() {
    ReactGA.event({
      category: "Sample",
      action: "Downloaded a sample file"
    })
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          alt="download docker-compose"
          onClick={this.getFileSample}
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
}

export default withTranslation()(SampleFile)
