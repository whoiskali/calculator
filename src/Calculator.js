import Compute from "./Compute";

import React, { Component } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeProvider } from "styled-components";
import { render } from "react-dom";

var isDarkMode = true; 
function toggle() {
    if (isDarkMode == false) isDarkMode = true; 
    else isDarkMode = false;
    console.log(isDarkMode)
    render()
  } 
export default class Car extends Component {
  static contextType = ThemeContext;
  render() {
    const { light, dark } = this.context
    var theme = isDarkMode ? dark : light
    console.log(theme)
    const initDigits = () => {
      const digits = [];
      for (let i = 1; i < 10; i++) {
        digits.push(
          <button onClick={() => this.props.updateValue(i.toString())} key={i}>
            {i}
          </button>
        );
      }
      return digits;
    };
    return (
        <div className="calculator">
        <input type="checkbox" onClick={() => {toggle(); this.render()}}/>Night Mode
            <div className="result" style={{backgroundColor: theme.secondary, color: theme.syntax}}>
            <Compute value={() => this.props.getValue()} />
            </div>
            <div className="digits" style={{background: theme.primary, color: theme.syntax}}>
            {initDigits()}
            <button onClick={() => this.props.updateValue("0")}>0</button>
            <button onClick={() => this.props.updateValue(".")}>.</button>
            <button onClick={() => this.props.updateValue("=")}>=</button>
            </div>
            <div className="operators">
            <button onClick={() => this.props.updateValue("/")}>/</button>
            <button onClick={() => this.props.updateValue("*")}>*</button>
            <button onClick={() => this.props.updateValue("+")}>+</button>
            <button onClick={() => this.props.updateValue("-")}>-</button>
            <button onClick={() => this.props.reset()}>C</button>
            </div>
        </div>
    );
  }
}
