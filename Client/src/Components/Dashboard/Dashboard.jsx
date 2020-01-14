import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//components
import Navbar from '../Navbar/Navbar'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />

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
