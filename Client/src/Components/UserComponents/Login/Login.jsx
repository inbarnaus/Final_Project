import React, { Component } from 'react';
import './login.css';
import {Button, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import {findDOMNode} from 'react-dom';
import App from "../../../App";
const FormGroup = require('react-bootstrap').FormGroup;

class Login extends Component {

    server_url = "http://localhost:8080/login/";

    handleclick = async() => {
        let name = findDOMNode(this.refs.nameref).value, pass = findDOMNode(this.refs.passref).value;
        console.log(name);
        try{
            let res = await axios.post(this.server_url, {username: name, password : pass});
            console.log(res.data.succeed);
            let appComp = document.getElementsByClassName('App');
            console.log(appComp);
            appComp.setLogged(res.data['succeed']);
            appComp.forceUpdate();
        }
        catch(e){
            console.log(e);
        }
    }

    render() {
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
                <Button type="button" variant="primary" onClick={()=>this.handleclick()}>אישור</Button>
            </div>
        );
    }
}

export default Login;