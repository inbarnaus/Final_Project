import React, { Component } from 'react';
import './login.css';
import { withRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import {findDOMNode} from 'react-dom';
import App from '../../../App';

class Login extends Component {
  constructor (){
    super();
    this.app = new App();
  }
   render(){
        return (
            <form
              className = "custom-file-translate-scss"
              id='login' 
              action='http://10.100.102.14:8080/login' 
              method='post' 
              encType="multipart/form-data">
                <h3>Login</h3>

                <div>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" autoComplete="on"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" /*onClick={() => {this.app.connect_server()}}*/>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
            </form>
        );
   }
    }

    export default withRouter(Login);

