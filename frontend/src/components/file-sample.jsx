import React from "react"
import ReactGA from "react-ga"
import { Button } from "@material-ui/core"
import { withTranslation } from "react-i18next"
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded"

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
    fetch(urlApi).then((response) => {
      response
        .blob()
        .then((blob) => {
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement("a")
          a.href = url
          a.download = "docker-compose.yml"
          a.click()
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error)
        })
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
      </div>
    )
  }
}

export default withTranslation()(SampleFile)
