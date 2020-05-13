import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NewUser from "./containers/signNewUser";
import SearchReport from "./containers/SearchReport";
import UploadPDF from "./containers/UploadPDF";
import AddG4 from "./containers/AddG4";
import AddReport from "./containers/AddReport";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signnew">
        <NewUser />
        </Route>
        <Route exact path="/searchrepo">
        <SearchReport />
        </Route>
        <Route exact path="/uploadpdf">
        <UploadPDF />
        </Route>
        <Route exact path="/addrepo">
        <AddReport />
        </Route>
        <Route exact path="/addg4">
        <AddG4 />
        </Route>
      <Route>
      </Route>
    </Switch>
  );
}