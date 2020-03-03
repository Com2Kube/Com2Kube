import React from "react"
import ReactGA from "react-ga"
import { Button } from "@material-ui/core"
import { withTranslation } from "react-i18next"
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded"

class FileDownload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getFileDownload = this.getFileDownload.bind(this)
  }


  gaEvent = () => {
    ReactGA.event({
      category: "Download",
      action: "Downloaded converted result"
    })
  }
  /** Api call to get the download file back from the backend.
   * The user gets back a download file.
   */
  getFileDownload() {
    // eslint-disable-next-line react/destructuring-assignment
    const data = this.props.posts
    const urlApi = `/api/download`
    fetch(urlApi, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "text/plain"
      }
    }).then((response) => {
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

  // TODO: update
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
          onClick={this.getFileDownload}
          startIcon={<GetAppRoundedIcon />}
        >
          {t("fileDownload.downloadFileBtn")}
        </Button>
      </div>
    )
  }
}

export default withTranslation()(FileDownload)
