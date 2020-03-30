import React, { Component } from 'react';
import {FormGroup, Button, FormControl, FormLabel } from 'react-bootstrap';
import {MDBTable, MDBTableHead} from 'mdbreact';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {findDOMNode} from 'react-dom';
//import * as server from "../../../server";


const server_url = "http://localhost:8080";

class ChooseApartment extends Component{

    header_attr = ['דירה', 'בניין', 'מגרש'];

    constructor(app) {
        super();
        this.state = app;
        // this.state = {
        //     propertie: <MDBTable striped bordered hover>
        //     <MDBTableHead>
        //       {this.header()}
        //       </MDBTableHead>
        //       </MDBTable>
        // }
        console.log(this.state['app']);
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
        this.setState({propertie : prop});
    }

    make_row(data){
        return (
            <tr>
            <th>{data['apartment']}</th>
            <th>{data['building']}</th>
            <th>{data['block']}</th>
            </tr>
        );
    }

    make_table(data){
        let rows = []
        for(let i in data){
            rows.push(this.make_row(data[i]));
        }
        let ret = <tbody>{rows}</tbody>;
        
        return ret;
    }

    handleclick = async() => {
        

        let block = document.getElementById("block").value,// findDOMNode(this.refs.blockref).value,
         building = document.getElementById("building").value,// findDOMNode(this.refs.buildingref).value,
          apartment = document.getElementById("apartment").value;// findDOMNode(this.refs.apartmentref).value;
        await this.state['app']({
          block: block, 
          building: building, 
          apartment: apartment
        });
        console.log({
          block: block,
          building: building,
          apartment: apartment
        });
        window.location="/apartment-details";
        
    }

    render(){
        const {propertie} = this.state;
        return (
            <section class="ftco-section contact-section">
		<div class="container">
		  <div class="row block-9 justify-content-center mb-5">
			<div class="col-md-6 align-items-stretch d-flex">
			  <form action="#" class="bg-light p-5 contact-form">
          <h1 class="mb-7 bread">הכנס פרטי דירה</h1>
          <div class="form-group">
            <input type="text" id="block" class="form-control" placeholder="מספר מגרש"></input>
          </div>
          <div class="form-group">
            <input type="text" id="building" class="form-control" placeholder="מספר בניין"></input>
          </div>
          <div class="form-group">
            <input type="text" id="apartment" class="form-control" placeholder="מספר דירה"></input>
            </div>
          <div class="form-group">
            <input type="submit" onClick={()=>this.handleclick()} value="מצא דירה" class="btn btn-primary py-3 px-5"></input>
          </div>
			  </form>
			</div>
		  </div>
		</div>
    {propertie}
	  </section>);
        //     <div>
        //         <FormGroup controlId = "formControlsBlocknum" type="text">
        //             <FormLabel>מגרש</FormLabel>
        //             <FormControl ref="blockref" placeholder="מגרש"/>
        //         </FormGroup>
        //         <FormGroup controlId = "formControlsBuildingnum" type="text">
        //             <FormLabel>בניין</FormLabel>
        //             <FormControl ref="buildingref" placeholder="בניין"/>
        //         </FormGroup>
        //         <FormGroup controlId = "formControlsApartmentnum" type="text">
        //             <FormLabel>דירה</FormLabel>
        //             <FormControl ref="apartmentref" placeholder="דירה"/>
        //         </FormGroup>         
        //         <Button type="button" variant="primary" onClick={()=>this.handleclick()}>אישור</Button>
        //         {propertie}
        //     </div>
        // );
    }
}

export default ChooseApartment;