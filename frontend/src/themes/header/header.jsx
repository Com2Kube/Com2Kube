import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Container, Link } from "@material-ui/core"
import logoCom2kube from "../../assets/images/logo_transparent-removebg-preview.png"
import { Logo, Name } from "./style"
import Links from "./links/links"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex"
  },
  nameLogo: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },
  navLinks: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    minWidth: "1px"
  }
}))

function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container className={classes.nameLogo}>
        <Link href="/">
          <Logo src={logoCom2kube} alt="com2kube logo" />
        </Link>
        <Name>
          <Typography variant="h6">
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "#5FABC2",
                justifyContent: "flex-start"
              }}
            >
              Com2kube
            </Link>
          </Typography>
        </Name>
      </Container>
      <Links />
    </div>
  )
}

export default Header
