import React, { Component } from 'react';
import {Button, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import {findDOMNode} from 'react-dom';

const server_url = "http://localhost:8080/register-costumer/";

class RegisterCostumer extends Component{

    handleclick = async() =>{
        let username =  findDOMNode(this.refs.nameref).value,
         password = findDOMNode(this.refs.passref).value,
          email = findDOMNode(this.refs.emailref).value;
        let res = await axios.post(server_url, {
            username: username,
            password : password,
            email: email
        });
        console.log(res);
        return res;
    }
    
    render(){
        return (
            <div>
                <FormGroup controlId = "formControlsname" type="text">
                    <FormLabel>שם משתמש</FormLabel>
                    <FormControl ref="nameref" placeholder="שם משתמש"/>
                </FormGroup>
                <FormGroup controlId = "formControlspass" type="text">
                    <FormLabel>סיסמא</FormLabel>
                    <FormControl ref="passref" placeholder="סיסמא"/>
                </FormGroup> 
                <FormGroup controlId = "formControlspass" type="text">
                    <FormLabel>אימייל</FormLabel>
                    <FormControl ref="emailref" placeholder="אימייל"/>
                </FormGroup> 
                <Button type="button" variant="primary" onClick={()=>this.handleclick()}>אישור</Button>
            </div>
        );
    }
}
export default RegisterCostumer