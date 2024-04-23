import React, { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Routes from "./Routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  console.log(";app");
  return (
    <React.Fragment>
      <Router>
        <Routes />
      </Router>
    </React.Fragment>
  );
}

export default App;
