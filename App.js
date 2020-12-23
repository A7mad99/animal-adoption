import React, { useState } from "react";
import { render } from "react-dom";
import Pet from "./pet";
import { Link, Router, router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import themeContext from "./themeContext";

const App = () => {
  const themeHook = useState("peru");

  return (
    <React.StrictMode>
      <themeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt me!!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </themeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
