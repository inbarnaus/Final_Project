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
      <Router >
        <Navigate/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/reports" component={Home}/>
        <Route exact path="/searchrepo" component={SearchReport}/>
        <Route exact path="/uploadpdf" component={UploadPDF}/>
        <Route exact path="/uploadscanning" component={UploadScanning}/>
        <Route exact path="/addrepo" component={AddReport}/>
        <Route exact path="/showsearch" component={ShowSearch}/>
      </Router>
      );
  }
}

export default LawyerDashboard;
