import React, { Component } from 'react';
import {Button, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import axios from "axios";
import {findDOMNode} from 'react-dom';

class RegisterLawyer extends Component{

    constructor(){
        super();
        this.state = {
            message: null
        };
    }

    server_url = "http://localhost:8080/register/lawyer/";

    setMessage(msg){
        this.setState({message : msg});
    }

    diveret(val){
        console.log(val);
        return <div>{val}</div>
    }

    handleclick = async() =>{
        let username =  findDOMNode(this.refs.nameref).value,
         password = findDOMNode(this.refs.passref).value,
          email = findDOMNode(this.refs.emailref).value;
        let res = await axios.post(this.server_url, {
            username: username,
            password : password,
            email: email
        });
        this.setMessage(res.data.succeed);
    }
    
    render(){
        const {message} = this.state;
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
                {message}
            </div>
        );
    }
}
export default RegisterLawyer