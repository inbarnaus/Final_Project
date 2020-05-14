import React, { Component, useRef } from 'react';
import './login.css';
import {Button, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import {findDOMNode} from 'react-dom';
import App from "../../../App";
const FormGroup = require('react-bootstrap').FormGroup;


export default function Login() {

    // server_url = "http://localhost:8080/login";

    // handleclick = async() => {
    //     let name = findDOMNode(this.refs.nameref).value, pass = findDOMNode(this.refs.passref).value;
    //     console.log(name);
    //     console.log('itay');
    //     try{
    //         let res = await axios.post(this.server_url, {username: name, password : pass});
    //         console.log(res.data.succeed);
    //         let appComp = document.getElementsByClassName('App');
    //         console.log(appComp);
    //         appComp.setLogged(res.data['succeed']);
    //         appComp.forceUpdate();
    //     }
    //     catch(e){
    //         console.log("catch");
    //     }
    // }

        return (
    //         <body>
    //   <form 
    //   className = "custom-file-translate-scss"
    //   action='http://localhost:8080/login' 
    //   method='post' 
    //   encType="multipart/form-data">
    //     <div class="form-group">
    //     <label class="w3-text-blue"><b>מייל</b></label>
    //     <input class="w3-input w3-border" type="text" name="username"/>
    //     </div>
    //     <div class="form-group">
    //     <label class="w3-text-blue"><b>סיסמא</b></label>
    //     <input class="w3-input w3-border" type="text" name="password"/>
    //     </div>
        
    //     <div class="form-group">
          
    //     <label class="w3-text-blue"><b></b></label>
    //     <input className="input" type='submit' value='submit!'/>
    //     </div>
    // </form> 
    // </body>
            <form
            className = "custom-file-translate-scss"
      id='uploadForm' 
      action='http://localhost:8080/login' 
      method='post' 
      encType="multipart/form-data">
                <h3>Login</h3>

                <div>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="username"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
