import React from "react"
import { Button } from "@material-ui/core"
import { withTranslation } from "react-i18next"

class FileDownload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getFileSample = this.getFileSample.bind(this)
  }

  getFileDownload() {
    const urlApi = `/api/sample`
    fetch(urlApi).then((response) => {
      response
        // TODO: change
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

  // TODO: update
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

export default withTranslation()(FileDownload)
