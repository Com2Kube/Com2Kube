import React from "react"
import { Button, Input } from "@material-ui/core"

export const FileUpload = () => {
  return (
    <div>
      <form
        action="http://dev-c2k.canadacentral.cloudapp.azure.com:5000"
        method="POST"
        enctype="multipart/form-data"
      >
        <Input id="input" type="file" name="file" />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </div>
  )
}
