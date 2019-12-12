import React from "react";
import kubernetes from "../assets/images/kubernetes_logo.png";

export const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <h1>Compose2Kube</h1>
      <img src={kubernetes} alt="kubernetes logo" />
      <p>link github project</p>
    </nav>
  );
};

