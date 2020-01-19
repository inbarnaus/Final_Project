import React, { Component } from 'react';
import {FormGroup, Button, FormControl, FormLabel } from 'react-bootstrap';
import {MDBTable, MDBTableHead, MDBTableBody} from 'mdbreact';
import PropertyDetails from '../PropertyDetails/PropertyDetails';

import axios from 'axios';
import {findDOMNode} from 'react-dom';
//import * as server from "../../../server";


const server_url = "http://localhost:8080";

class ChooseApartment extends Component{

    constructor() {
        super();
    
        this.state = {
            propertie: <MDBTable striped bordered hover>
            <MDBTableHead>
              {this.header()}
              </MDBTableHead>
              </MDBTable>
        }
    };

    header() {
        return <tr>
        <th>דירה</th>
        <th>בניין</th>
        <th>מגרש</th>
        <th>#</th>
        </tr>;
    };

    

    setProp = (prop) => {
        this.setState({propertie: prop});
    }

    handleclick = async() => {
        

        let block = findDOMNode(this.refs.blockref).value, building = findDOMNode(this.refs.buildingref).value, apartment = findDOMNode(this.refs.apartmentref).value;
        // console.log(block);
        // console.log(building);
        // console.log(apartment);
        let apartment_url = (apartment !== "" ? apartment.concat("/") : "");
        let building_url = (building !== "" ? building.concat("/").concat(apartment_url) : "");
        let block_url = (block !== ""? block.concat("/").concat(building_url) : "");
        let get_url = (server_url.concat("/apartments/").concat(block_url));
        console.log(get_url);
        try{
            let res = await axios.get(get_url);
            console.log(res);
            this.setProp({prop : res.data});
            //return res.data;
        }
        catch(err){
            console.log(err);
        }
        
    }

    render(){
        const {propertie} = this.state;
        return (
            <div>
                <FormGroup controlId = "formControlsBlocknum" type="text">
                    <FormLabel>מגרש</FormLabel>
                    <FormControl ref="blockref" placeholder="מגרש"/>
                </FormGroup>
                <FormGroup controlId = "formControlsBuildingnum" type="text">
                    <FormLabel>בניין</FormLabel>
                    <FormControl ref="buildingref" placeholder="בניין"/>
                </FormGroup>
                <FormGroup controlId = "formControlsApartmentnum" type="text">
                    <FormLabel>דירה</FormLabel>
                    <FormControl ref="apartmentref" placeholder="דירה"/>
                </FormGroup>         
                <Button type="button" variant="primary" onClick={()=>this.handleclick()}>אישור</Button>
                {propertie}
            </div>
        );
    }
}

export default ChooseApartment;