import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "../../containers/Home";
import NewUser from "../../containers/signNewUser";
import SearchReport from "../../containers/SearchReport";
import UploadPDF from "../../containers/UploadPDF";
import AddG4 from "../../containers/AddG4";
import AddReport from "../../containers/AddReport";
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
