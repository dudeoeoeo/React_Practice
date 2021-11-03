import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import SassComponent from "./SassComponent";
import StyledComponent from "./StyledComponents";

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
      </div>
    );
  }
}

export default App;
