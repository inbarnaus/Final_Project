import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NewUser from "./containers/signNewUser";
import SearchReport from "./containers/SearchReport";
import UploadPDF from "./containers/UploadPDF";
import AddG4 from "./containers/AddG4";
import AddReport from "./containers/AddReport";
import ReplaceG4 from "./containers/ReplaceG4";
import UploadScanning from "./containers/UploadScanning";
import EditReport from "./containers/EditReport";
// import Login from "./Components/UserComponents/Login/Login"

export default function Routes() {
  return (
    <Switch>
{/* <Route exact path="/login">
        <Login />
      </Route> */}

      {/* <Route exact path="/home">
        <Home />
      </Route> */}

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

        <Route exact path="/editrepo">
        <EditReport />
        </Route>

        <Route exact path="/addg4">
        <AddG4 />
        </Route>

      <Route exact path='/replaceg4'>
        <ReplaceG4/>
      </Route>
      
    </Switch>
  );
}