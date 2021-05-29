import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BidderProfile from "./Pages/BidderProfile";
import Home from "./Pages/Home";
import ThemeSwitcher from "./Utils/ThemeSwitcher";

function App(props) {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/:username/:userId" render={(props) => <BidderProfile {...props} />} />
          <Route path="/" render={(props) => <Home {...props} />} />
          <Route path="*" render={(props) => <h2>Error 404</h2>} />
        </Switch>
      </BrowserRouter>
      <ThemeSwitcher />
    </React.Fragment>
  );
}

export default App;
