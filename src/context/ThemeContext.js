import React, { createContext, Component } from "react";
import ToggleSwitch from "../Toggle";

export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    isDarkMode: true,
    dark: {
      syntax: "#ddd",
      primary: "#292929",
      syntax: "#FFF",
      secondary: "#252533",
    },
    light: {
      syntax: "#555",
      primary: "#ddd",
      syntax: "#000",
      secondary: "#FFF",
    },
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
