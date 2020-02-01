import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import NotFoundImg from "../assets/images/not-found.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: "50%",
    margin: theme.spacing(2)
  }
}))

const NotFound = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h2">Oops..</Typography>
      <Typography variant="h4">
        We can&apos;t seem to find the page you&apos;re looking for.
      </Typography>
      <img className={classes.img} src={NotFoundImg} alt="not found error img" />
    </div>
  )
}

export default NotFound
