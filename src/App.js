import React, { useState, lazy, Suspense } from "react";
//import { render } from "react-dom";
//import ReactDOM from "react-dom"
// import Pet from "./pet";
import { Link, Router } from "@reach/router";
//import SearchParams from "./SearchParams";
// import Details from "./Details";
import themeContext from "./themeContext";
//import NavBar from "./navBar";

// use lazy for spliting
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("peru");

  return (
    <React.StrictMode>
      <themeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt me!!</Link>
          </header>

          <Suspense fallback={<h1>loading route</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </themeContext.Provider>
    </React.StrictMode>
  );
};

// render(<App />, document.getElementById("root"));
export default App;
