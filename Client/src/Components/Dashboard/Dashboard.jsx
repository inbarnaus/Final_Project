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
<<<<<<< HEAD
import RegisterLawyer from "../UserComponents/Register/RegisterLawyer";
import RegisterCostumer from "../UserComponents/Register/RegisterCostumer";
import ChooseApartment from "../DataComponents/ChooseApartment/ChooseApartment";
import ChoosePurchase from '../DataComponents/ChoosePurchase/ChoosePurchase';
import UserProperties from '../UserComponents/UserProperties/UserProperties';
import Unreported from "../DataComponents/Unreported/Unreported";
import EditGetPurchase from "../DataComponents/EditPurchase/EditGetPurchase"
=======
//components
import NavbarComp from '../NavbarComp/NavbarComp'
>>>>>>> 9cb62c220ae0963f683a40be2c58fccbba5d31d4

class Dashboard extends Component {
    render() {
        return (
<<<<<<< HEAD
            <Navigate>
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
    </Navigate>     );
=======
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
>>>>>>> 9cb62c220ae0963f683a40be2c58fccbba5d31d4
    }
}

export default Dashboard;
