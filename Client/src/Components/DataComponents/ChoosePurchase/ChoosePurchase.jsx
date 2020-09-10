import React, { Component } from 'react';
import {FormGroup, Button, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import {findDOMNode} from 'react-dom';
import {MDBTable, MDBTableHead} from 'mdbreact';




const server_url = "http://localhost:8080";

class ChoosePurchase extends Component{

    header_attr = ['דירה', 'בניין', 'מגרש'];

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

    setProp = (prop) => {
        this.setState({propertie: prop});
    }
    
    handleclick = async() => {

        let block = findDOMNode(this.refs.blockref).value,
         building = findDOMNode(this.refs.buildingref).value,
          apartment = findDOMNode(this.refs.apartmentref).value;
        let apartment_url = (apartment !== "דירה" ? apartment.concat("/") : "");
        let building_url = (building !== "בניין" ? building.concat("/").concat(apartment_url) : "");
        let block_url = (block !== "מגרש"? block.concat("/").concat(building_url) : "");
        let get_url = (server_url.concat("/editGet/").concat(block_url));
        try{
            let res = await axios.get(get_url);
            let table = <MDBTable striped bordered hover>
            <MDBTableHead>
              {this.header()}
              </MDBTableHead>
              {this.make_table(res.data)}
              </MDBTable>;
            
            this.setProp(table);
        }
        catch(err){
            console.log(err);
        }   
    }

    render(){
        const {propertie} = this.state;
        return (
            <div>
                <FormGroup controlId = "formControlsblockNum" type="text">
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

export default ChoosePurchase;