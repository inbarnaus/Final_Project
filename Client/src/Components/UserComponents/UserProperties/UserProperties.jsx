import React, { Component } from 'react'
import '../Login/login.css'
import {InputGroup, Button } from 'react-bootstrap';
import axios from "axios";

class UserProperties extends Component {

    get_url = "http://localhost:8080/login/";
    post_url = "http://localhost:8080/user-props/";
    
    constructor(){
        super();
        this.state = {
            oldname : React.createRef(),
            oldpass : React.createRef(),
            newname : React.createRef(),
            newpass : React.createRef(),
            newemail : React.createRef()
        };
    }

    handleclick = async() =>{
        let oldname = this.state.oldname.current.placeholder, oldpass = this.state.oldpass.current.placeholder;
        let res = await axios.get(this.get_url.concat(oldname).concat("/").concat(oldpass));
        let newname = this.state.newname.current.placeholder,
         newpass = this.state.newpass.current.placeholder,
         newemail = this.state.newemail.current.placeholder;
        if(res){
            let res = await axios.post(this.post_url, {
                oldname : oldname,
                oldpass : oldpass,
                newname : newname,
                newpass : newpass,
                newemail : newemail
            });
        }
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

                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">שם משתמש חדש</InputGroup.Text>
                    </InputGroup.Append>
                    <input
                        placeholder="שם משתמש חדש"
                        aria-label="שם משתמש חדש"
                        aria-describedby="basic-addon2"
                        ref = {this.state['block']}
                    />  
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">סיסמא חדשה</InputGroup.Text>
                    </InputGroup.Append>
                    <input
                        placeholder="סיסמא חדשה"
                        aria-label="סיסמא חדשה"
                        aria-describedby="basic-addon2"
                        ref = {this.state['building']}
                    /> 
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">אימייל חדש</InputGroup.Text>
                    </InputGroup.Append>
                    <input
                        placeholder="אימייל חדש"
                        aria-label="אימייל חדש"
                        aria-describedby="basic-addon2"
                        ref = {this.state['building']}
                    /> 
                    <Button type="button" variant="primary" onClick={()=>this.handleclick()}>אישור</Button>
                </InputGroup>
            </div>
        );
    }
}

export default UserProperties;