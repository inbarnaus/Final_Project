import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigate from "../Navigate/Navigate"

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navigate/>

                <Router >
                <Switch>
                    <Route exact path="/">
                    <div></div>
                    </Route>
                    <Route exact path="/1">
                    <div>page home</div>
                    </Route>
                    <Route path="/2">
                    <div>page 2</div>
                    </Route>
                    <Route path="/3">
                    <div>page 3</div>
                    </Route>
                </Switch>
                </Router>
            </div>
        );
    }
}

export default Dashboard;
