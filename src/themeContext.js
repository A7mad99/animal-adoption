import React, { createContext } from "react";

const themeContext = React.createContext(["green", () => {}]);

export default themeContext;
