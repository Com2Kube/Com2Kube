import React from "react";
import "./App.css";
import Header from "./themes/header";
import Footer from "./themes/footer";
import { Index } from "./components";
import { FileUpload } from "./components/file-upload";

function App() {
  return (
    <div className="App">
      <Header />
      <Index />
      <FileUpload />
      <Footer />
    </div>
  );
}

export default App;
