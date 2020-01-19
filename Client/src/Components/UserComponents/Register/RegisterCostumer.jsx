import React, { Component } from 'react';
import {InputGroup, Button } from 'react-bootstrap';
import axios from "axios";

const server_url = "http://localhost:8080/register-costumer/";

class RegisterCostumer extends Component{

    constructor() {
        super();
    
        this.state = {
            username: React.createRef(), 
            password: React.createRef(), 
            email: React.createRef(),
        }
    }

    handleclick = async() =>{
        let username = this.state.username.current, password = this.state.password.current, email = this.state.email.current;
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
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">אימייל</InputGroup.Text>
                    </InputGroup.Append>
                    <input
                        placeholder="אימייל"
                        aria-label="אימייל"
                        aria-describedby="basic-addon2"
                        ref = {this.state['apartment']}
                    />           
                    <Button type="button" variant="primary" onClick={()=>this.handleclick()}>אישור</Button>
                </InputGroup>
            </div>
        );
    }
}
export default RegisterCostumer