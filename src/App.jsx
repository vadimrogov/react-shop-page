import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import './App.scss';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
      </Switch>
    </Router>
  );

export default App;
