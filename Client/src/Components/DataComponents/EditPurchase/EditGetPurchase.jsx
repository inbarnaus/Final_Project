import React, { Component } from 'react';
import {FormGroup, Button, FormControl, FormLabel } from 'react-bootstrap';
import PurchaseDetails from '../PurchaseDetails/PurchaseDetails';
import axios from 'axios';
import {findDOMNode} from 'react-dom';




const server_url = "https:localhost/8080";

class EditGetPurchase extends Component{

    constructor() {
        super();
    
        this.state = {
            purchase: <PurchaseDetails/>
        }
    };

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
        console.log(get_url);
        try{
            let res = await axios.get(get_url);
            console.log(get_url);
            this.setProp({prop : res});
            return res;
        }
        catch(err){
            console.log(err);
        }
        

        
    }

    render(){
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
                {this.state.propertie}
            </div>
        );
    }
}

export default EditGetPurchase;