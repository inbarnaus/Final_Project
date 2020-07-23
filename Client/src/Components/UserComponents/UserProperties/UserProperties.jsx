import React, { Component } from 'react'
import '../Login/login.css'
import {Button, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import axios from "axios";
import {findDOMNode} from 'react-dom';

class UserProperties extends Component {

    //get_url = "http://localhost:8080/login/";
    post_url = "http://localhost:8080/user-props/";

    handleclick = async() =>{
        let oldname = findDOMNode(this.refs.oldnameref).value,
         oldpass = findDOMNode(this.refs.oldpassref).value,
         email = findDOMNode(this.refs.emailref).value,
         newname = findDOMNode(this.refs.newnameref).value,
         newpass = findDOMNode(this.refs.newpass).value;
        let res = await axios.post(this.post_url, {
            oldname : oldname,
            oldpass : oldpass,
            newname : newname,
            newpass : newpass,
            newemail : email
        });
    }
    
    render() {
        return (
            <div>
                <FormGroup controlId = "formControlsname" type="text">
                    <FormLabel>שם משתמש</FormLabel>
                    <FormControl ref="oldnameref" placeholder=" שם משתמש מקורי"/>
                </FormGroup>
                <FormGroup controlId = "formControlspass" type="text">
                    <FormLabel>סיסמא</FormLabel>
                    <FormControl ref="oldpassref" placeholder="סיסמא מקורית"/>
                </FormGroup> 
                <FormGroup controlId = "formControlspass" type="text">
                    <FormLabel>אימייל</FormLabel>
                    <FormControl ref="emailref" placeholder="אימייל"/>
                </FormGroup> 
                <FormGroup controlId = "formControlsname" type="text">
                    <FormLabel>שם משתמש</FormLabel>
                    <FormControl ref="newnameref" placeholder="שם משתמש חדש"/>
                </FormGroup>
                <FormGroup controlId = "formControlspass" type="text">
                    <FormLabel>סיסמא</FormLabel>
                    <FormControl ref="newpassref" placeholder="סיסמא חדשה"/>
                </FormGroup> 
                <Button type="button" variant="primary" onClick={()=>this.handleclick()}>אישור</Button>
            </div>
        );
    }
}

export default UserProperties;