import React from "react"
import ReactGA from "react-ga"
import axios from "axios"
import { Button } from "@material-ui/core"
import { withTranslation } from "react-i18next"
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded"

const useStyles = () => ({
  root: {
    display: "flex",
    justifyContent: "flex-end"
  }
})

class FileDownload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getFileDownload = this.getFileDownload.bind(this)
    this.gaEvent = this.gaEvent.bind(this)
  }

  /** Api call to get the download file back from the backend.
   * The user gets back a download file.
   */
  getFileDownload(e) {
    e.preventDefault()
    // eslint-disable-next-line react/destructuring-assignment
    const data = this.props.posts
    const urlApi = `/api/download`
    axios({
      url: urlApi,
      method: "POST",
      data: data,
      responseType: "blob",
      headers: {
        "Content-Type": "text/plain"
      }
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
      category: "Download",
      action: "Downloaded converted result"
    })
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props
    const classes = useStyles()
    return (
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        alt="download docker-compose"
        fullWidth={true}
        onClick={this.getFileDownload}
        startIcon={<GetAppRoundedIcon />}
      >
        {t("fileDownload.downloadFileBtn")}
      </Button>
    )
  }
}

export default withTranslation()(FileDownload)
