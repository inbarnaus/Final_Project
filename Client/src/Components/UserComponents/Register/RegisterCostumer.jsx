import React, { Component } from 'react';
import {Button, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import axios from "axios";
import {findDOMNode} from 'react-dom';

class RegisterCostumer extends Component{

    constructor(){
        super();
        this.state = {
            message: null
        };
    }

    server_url = "http://localhost:8080/register/costumer/";

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
            <section class="ftco-section contact-section">
      <div class="container">
        <div class="row block-9 justify-content-center mb-5">
          <div class="col-md-6 align-items-stretch d-flex">
            <form action="#" class="bg-light p-5 contact-form">
              <h1 class="mb-7 bread">הרשמת לקוח חדש</h1>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="כתובת אימייל"></input>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="סיסמא"></input>
              </div>
              <div class="form-group">
                <input type="submit" value="שנה פרטים" class="btn btn-primary py-3 px-5"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
        //     <div>
        //         <FormGroup controlId = "formControlsname" type="text">
        //             <FormLabel>שם משתמש</FormLabel>
        //             <FormControl ref="nameref" placeholder="שם משתמש"/>
        //         </FormGroup>
        //         <FormGroup controlId = "formControlspass" type="text">
        //             <FormLabel>סיסמא</FormLabel>
        //             <FormControl ref="passref" placeholder="סיסמא"/>
        //         </FormGroup> 
        //         <FormGroup controlId = "formControlspass" type="text">
        //             <FormLabel>אימייל</FormLabel>
        //             <FormControl ref="emailref" placeholder="אימייל"/>
        //         </FormGroup> 
        //         <Button type="button" variant="primary" onClick={()=>this.handleclick()}>אישור</Button>
        //         {message}
        //     </div>
        // );
    }
}
export default RegisterCostumer