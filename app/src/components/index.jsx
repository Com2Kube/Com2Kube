import React from "react"
import { FileUpload } from "./file-upload"

export const Index = () => {
  return (
    <div className="col">
      <p>
        This website sole purpose is to convert docker compose files into Kubernetes
        items.
        <br />
        You can convert your docker-compose files into three simple steps:
      </p>
      <ol>
        <li>Click on the "Choose File" button.</li>
        <li>Select your docker-compose.yml file.</li>
        <li>Press submit to get your compose to kubernetes file.</li>
      </ol>
      <FileUpload />
    </div>
  )
}
