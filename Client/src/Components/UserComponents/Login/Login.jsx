import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import { withRouter } from 'react-router-dom';
import address from '../../../server_address';
// import ReactDOM from 'react-dom';
// import {findDOMNode} from 'react-dom';


class Login extends Component {
  constructor (props){
    super(props);
    this.state = {
        email: '',
        password: ''
    }
  }

  submit = async(e) => {
    e.preventDefault();
    const {email,password} = this.state;

    let body = {
        email,
        password
    }
    let response = await axios.post(address + '/login',body);
    if(this.props.handleLogin)
      this.props.handleLogin(response.data.succeed);
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    });
  }

   render(){
        return (
            <form
              className = "custom-file-translate-scss"
              id='login' 
              onSubmit={this.submit}
              encType="multipart/form-data"
            >
                <h3>Login</h3>

                <div>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" autoComplete="on" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
            </form>
        );
   }
    }

    export default withRouter(Login);

