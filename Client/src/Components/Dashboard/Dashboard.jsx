import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigate from "../Navigate/Navigate";
import RegisterLawyer from "../UserComponents/Register/RegisterLawyer";
import RegisterCostumer from "../UserComponents/Register/RegisterCostumer";
import ChooseApartment from "../DataComponents/ChooseApartment/ChooseApartment";
import ChoosePurchase from '../DataComponents/ChoosePurchase/ChoosePurchase';
import UserProperties from '../UserComponents/UserProperties/UserProperties';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navigate/>
                <Router >
                <Switch>
                    <Route exact path="/">
                    <div>דף הבית</div>
                    </Route>
                    <Route exact path="/apartments">
                    <ChooseApartment/>
                    </Route>
                    <Route exact path="/purchase">
                    <ChoosePurchase/>
                    </Route>
                    <Route exact path="/register-lawyer">
                    <RegisterLawyer/>
                    </Route>
                    <Route exact path="/register-costumer">
                    <RegisterCostumer/>
                    </Route>
                    <Route exact path="/edit">
                    <UserProperties/>
                    </Route>
                    <Route exact path="/editGet">
                    <UserProperties/>
                    </Route>
                    <Route exact path="/user-properties">
                    <UserProperties/>
                    </Route>
                </Switch>
                </Router>
            </div>
        );
    }
}

export default Dashboard;
