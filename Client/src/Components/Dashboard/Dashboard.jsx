import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigate from "../Navigate/Navigate";
//components
import NavbarComp from '../NavbarComp/NavbarComp'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavbarComp />
                <Navigate/>
                <Router >
                <Switch>
                    <Route exact path="/">
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
