import React from "react"
import { post } from "axios"
import { Button, Input, Box } from "@material-ui/core"
import { withTranslation } from "react-i18next"

const useStyles = () => ({
  form: {
    with: "100%",
    display: "flex",
    flexDirection: "column"
  }
})

class FileUpload extends React.Component {
  constructor(props) {
    super(props)
    this.onDrop = (file) => {
      this.setState({ file })
    }
    this.state = {
      file: null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] })
  }

  onFormSubmit(e) {
    const { file } = this.state
    e.preventDefault()
    this.fileUpload(file)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
      })
  }

  fileUpload(file) {
    const url = "/api/upload"
    // eslint-disable-next-line no-undef
    const formData = new FormData()
    formData.append("compose_file", file)
    const headerOptions = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      }
    }
    return post(url, formData, headerOptions)
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props
    const classes = useStyles()
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          encType="multipart/form-data"
          className={classes.form}
        >
          <Input
            id="compose_file"
            type="file"
            name="compose_file"
            required={true}
            onChange={this.onChange}
          />
          <Box m={2}>
            <Button
              type="submit"
              variant="outlined"
              alt="convert button"
              value="upload"
            >
              {t("fileUpload.submitBtn")}
            </Button>
          </Box>
        </form>
      </div>
    )
  }
}

export default withTranslation()(FileUpload)
