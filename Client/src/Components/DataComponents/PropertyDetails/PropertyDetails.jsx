import React, { Component } from 'react';
//import Navigate from "../Navigate/Navigate";
import {MDBTable, MDBTableHead, MDBTableBody} from 'mdbreact';
//import axios from "axios";

import setState from "../../../App";

class PropertyDetails extends Component{

    header = () => {return (
                    <tr>
                    <th>דירה</th>
                    <th>בניין</th>
                    <th>מגרש</th>
                    <th>#</th>
                    </tr>
                );
    };

    tbody = <tr></tr>;

    constructor(tbody) {

        super();
        //console.log(this.tbody);
        this.tbody = tbody;
        this.state = {
            block: null, 
            building: null, 
            apartment: null,
            buyer1_name: null, 
            buyer1_id: null, 
            buyer2_name: null, 
            buyer2_id: null, 
            parking1: null, 
            parking2: null, 
            garage: null, 
            buying_date: null, 
            buying_price: null, 
            assassment_no: null, 
            mortage_no: null, 
            mortage_bank: null, 
            notes:null,
            data: <tbody></tbody>
        };
    }

    addElements(){
        this.state['data'] = (
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
        );
    }
    
    render() {
        return(
            <div>
                <MDBTable striped bordered hover>
                  <MDBTableHead>
                    {this.header()}
                    </MDBTableHead>
                  {this.state.data}
                </MDBTable>
            </div>
        );
    }


}
export default PropertyDetails;