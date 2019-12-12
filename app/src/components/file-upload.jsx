import React from "react";
import { Button, Input } from "@material-ui/core";

export const FileUpload = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form
            action="http://c2k.canadacentral.cloudapp.azure.com:5000"
            method="POST"
            enctype="multipart/form-data"
          >
            <Input id="input" type="file" name="file" />

            <Button type="submit" className="btn btn-dark">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
