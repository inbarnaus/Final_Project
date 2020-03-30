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

import UserProperties from '../UserComponents/UserProperties/UserProperties';
import Unreported from "../DataComponents/Unreported/Unreported";
import EditGetPurchase from "../DataComponents/EditPurchase/EditGetPurchase"
import ApartmentDetails from '../DataComponents/ApartmentDetails/ApartmentDetails';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {apartment_req: undefined};
    }
    setApReq = (apartment_req) => {
        // console.log(apartment_req);
        this.setState({apartment_req: apartment_req});
        // console.log(this.state);
    }
    render() {
        // let block = this.state['block']; 
        // let building = this.state['building'];
        // let apartment = this.state['apartment'];
        const {apartment_req} = this.state;
        return (
            <div className="Dashboard">
                <Navigate/>
                <Router >
                <Switch>
                    <Route exact path="/">
                    <div>דף הבית</div>
                    </Route>
                    <Route exact path="/apartments">
                    <ChooseApartment app={this.setApReq}/>
                    </Route>
                    <Route exact path="/apartment-details">
                    <ApartmentDetails apartment_req={apartment_req}/>
                    </Route>
                    <Route exact path="/unreported">
                    <Unreported/>
                    </Route>
                    <Route exact path="/register-lawyer">
                    <RegisterLawyer/>
                    </Route>
                    <Route exact path="/register-costumer">
                    <RegisterCostumer/>
                    </Route>
                    <Route exact path="/editGet">
                    <EditGetPurchase/>
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
