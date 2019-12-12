import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
  }
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" m={0.5}>
            <Link href="">Information</Link>
            <Link href="">Disclaimer</Link>
            <Link href="">About</Link>
            <Link href="">Contact us</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {"Copyright © "}
            <Link color="inherit" href="">
              Compose2Kube
            </Link>
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </footer>
    </div>
  );
};
