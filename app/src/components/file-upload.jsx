import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Input, Box } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  form: {
    with: "100%",
    display: "flex",
    flexDirection: "column"
  }
}))

const FileUpload = () => {
  const classes = useStyles()
  return (
    <div>
      <form
        action="http://dev-c2k.canadacentral.cloudapp.azure.com:5000"
        method="POST"
        encType="multipart/form-data"
        className={classes.form}
      >
        <Input id="input" type="file" name="file" />
        <Box m={2}>
          <Button type="submit" variant="outlined" alt="convert button">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default FileUpload
