import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from "react-router-dom";
import Home from "./containers/Home";
import NewUser from "./containers/signNewUser";
import SearchReport from "./containers/SearchReport";
import UploadPDF from "./containers/UploadPDF";
import AddG4 from "./containers/AddG4";
import AddReport from "./containers/AddReport";
import ReplaceG4 from "./containers/ReplaceG4";
import UploadScanning from "./containers/UploadScanning";
import ShowSearch from "./containers/ShowSearch";
import EditReport from "./containers/EditReport";
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
      <Route exact path="/signnew">
        <NewUser />
        </Route>
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
        <Route exact path="/addg4">
        <AddG4 />
        </Route>
        <Route exact path="/showsearch">
        <ShowSearch />
        </Route>
        <Route exact path='/editrepo'>
        <EditReport/>
      </Route>
        <Route exact path='/replaceg4'>
        <ReplaceG4/>
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
