import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import kubernetes from "../assets/images/kubernetes_logo.png";
import { Button, Toolbar, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    with: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Compose2kube
        </Typography>
        {/* <img src={kubernetes} alt="kubernetes logo" /> */}
        <Container display="flex">
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            onClick={() =>
              window.open(
                "https://github.com/GabrielJean/Compose2Kube",
                "_blank"
              )
            }
          >
            Github
          </Button>
          <Button color="inherit">Community</Button>
        </Container>
      </Toolbar>
    </div>
  );
};
