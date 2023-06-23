import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home'
import Detalle from "./Pages/Detalle/Detalle";
export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>             
        </Switch>
        <Route path="/proyecto/:id">
            <Detalle />
        </Route>
    </Router>
  );
}