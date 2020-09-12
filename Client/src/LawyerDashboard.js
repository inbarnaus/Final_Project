import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} 
from "react-router-dom";
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
import ChangePass from "./containers/ChangePass";
import Navigate from "./Navigate";

class LawyerDashboard extends Component {
  render() {
    return (
      <Router >
        <Navigate/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/reports" component={Home}/>
        <Route exact path="/signnew" component={NewUser}/>
        <Route exact path="/searchrepo" component={SearchReport}/>
        <Route exact path="/uploadpdf" component={UploadPDF}/>
        <Route exact path="/uploadscanning" component={UploadScanning}/>
        <Route exact path="/addrepo" component={AddReport}/>
        <Route exact path="/addg4" component={AddG4}/>
        <Route exact path="/showsearch" component={ShowSearch}/>
        <Route exact path='/editrepo' component={EditReport}/>
        <Route exact path='/replaceg4' component={ReplaceG4}/>
        <Route exact path='/changepass' component={ChangePass}/>
      </Router>
    );
  }
}

export default LawyerDashboard;
