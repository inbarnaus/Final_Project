import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from "react-router-dom";
import Home from "./containers/Home";
import SearchReport from "./containers/SearchReport";
import UploadPDF from "./containers/UploadPDF";
import AddReport from "./containers/AddReport";
import UploadScanning from "./containers/UploadScanning";
import ShowSearch from "./containers/ShowSearch";
// import Login from "./Components/UserComponents/Login/Login"

import Navigate from "./Navigate";

class LawyerDashboard extends Component {
    render() {
        return (
            <div>
                <Navigate/>
                <Router >
                <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Redirect from='/uploadpdf' to="/" /> */}
        <Route exact path="/searchrepo">
        <SearchReport />
        </Route>
        <Route exact path="/uploadpdf">
        <UploadPDF />
        </Route>
        <Route exact path="/uploadscanning">
        <UploadScanning />
        </Route>
        <Route exact path="/addrepo">
        <AddReport />
        </Route>
        <Route exact path="/showsearch">
        <ShowSearch />
        </Route>
        {/* <Route exact path="/login">
        <Login />
        </Route> */}
      <Route>
      </Route>
    </Switch>
                </Router>
            </div>
        );
    }
}

export default LawyerDashboard;
