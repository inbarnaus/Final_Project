import React, { Component } from 'react';
import './login.css';
import {Button, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import {findDOMNode} from 'react-dom';
import App from "../../../App";
const FormGroup = require('react-bootstrap').FormGroup;

class Login extends Component {
    constructor(app){
        super();
        this.state = app;

        console.log(app);  
    }
    server_url = "http://localhost:8080/login/";

    handleclick = async() => {
        let name = document.getElementById("email").value, pass = document.getElementById("pass").value;
        try{
            let res = await axios.post(this.server_url, {username: name, password : pass});
            console.log(res.data.succeed);
            this.state['app'](res.data.succeed == 'true');
        }
        catch(e){
            console.log(e);
        }
    }

    render() {
        return (
            <div class="container">
                <div class="row block-9 justify-content-center mb-5">
                    <div class="col-md-6 align-items-stretch d-flex">
                        <form action="#" class="bg-light p-5 contact-form">
                            <h1 class="mb-7 bread">התחברות</h1>
                            <h5 class="mb-3 bread">כתובת אימייל</h5>
                            <div class="form-group">
                                <input type="text" id="email" class="form-control" placeholder="כתובת אימייל"></input>
                            </div>
                            <h5 class="mb-3 bread">סיסמא</h5>
                            <div class="form-group">
                                <input type="text" id="pass" class="form-control" placeholder="סיסמא"></input>
                            </div>
                            <div class="form-group">
                                <input type="submit" onClick={()=>this.handleclick()} value="התחבר" class="btn btn-primary py-3 px-5"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;