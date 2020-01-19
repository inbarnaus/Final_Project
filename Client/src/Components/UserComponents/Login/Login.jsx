import React, { Component } from 'react'
import './login.css'
import {InputGroup, Button} from 'react-bootstrap';
import axios from 'axios';
import {findDOMNode} from 'react-dom';
class Login extends Component {

    server_url = "http://localhost:8080/login/";

    constructor(){
        super();
        this.state = {
            username: React.createRef(),
            passowrd : React.createRef()
        }
    
    }

    handleclick = async() => {
        let username = this.state.username.current.placeholder, password = this.state.password.current.placeholder;
        let res = await axios.get(this.server_url.concat(username).concat("/").concat(password));
        console.log(res);
    }

    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">שם משתמש</InputGroup.Text>
                    </InputGroup.Append>
                    <input
                        placeholder="שם משתמש"
                        aria-label="שם משתמש"
                        aria-describedby="basic-addon2"
                        ref = {this.state['block']}
                    />  
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">סיסמא</InputGroup.Text>
                    </InputGroup.Append>
                    <input
                        placeholder="סיסמא"
                        aria-label="סיסמא"
                        aria-describedby="basic-addon2"
                        ref = {this.state['building']}
                    />         
                    <Button type="button" variant="primary" onClick={()=>this.handleclick()}>אישור</Button>
                </InputGroup>
            </div>
        );
    }
}

export default Login;