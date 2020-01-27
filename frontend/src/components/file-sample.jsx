import React from "react"
import { Button } from "@material-ui/core"
import { withTranslation } from "react-i18next"

class SampleFile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getFileSample = this.getFileSample.bind(this)
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
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          alt="download docker-compose"
          onClick={this.getFileSample}
        >
          {t("fileSample.downloadBtn")}
        </Button>
      </div>
    )
  }
}

export default withTranslation()(SampleFile)
