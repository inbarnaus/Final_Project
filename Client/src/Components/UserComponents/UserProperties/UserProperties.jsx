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
            <section class="ftco-section contact-section">
      <div class="container">
        <div class="row block-9 justify-content-center mb-5">
          <div class="col-md-6 align-items-stretch d-flex">
            <form action="#" class="bg-light p-5 contact-form">
              <h1 class="mb-7 bread">עריכת פרטי משתמש</h1>
              <h5 class="mb-7 bread">כתובת אימייל</h5>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="כתובת אימייל"></input>
              </div>
              <h5 class="mb-7 bread">סיסמא</h5>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="סיסמא"></input>
              </div>
              <h5 class="mb-7 bread">כתובת אימייל חדשה</h5>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="כתובת אימייל חדשה"></input>
              </div>
              <h5 class="mb-7 bread">סיסמא חדשה</h5>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="סיסמא חדשה"></input>
              </div>
              <div class="form-group">
                <input type="submit" onClick={()=>this.handleclick()} value="שנה פרטים" class="btn btn-primary py-3 px-5"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
            // <div>
            //     <FormGroup controlId = "formControlsname" type="text">
            //         <FormLabel>שם משתמש</FormLabel>
            //         <FormControl ref="oldnameref" placeholder=" שם משתמש מקורי"/>
            //     </FormGroup>
            //     <FormGroup controlId = "formControlspass" type="text">
            //         <FormLabel>סיסמא</FormLabel>
            //         <FormControl ref="oldpassref" placeholder="סיסמא מקורית"/>
            //     </FormGroup> 
            //     <FormGroup controlId = "formControlspass" type="text">
            //         <FormLabel>אימייל</FormLabel>
            //         <FormControl ref="emailref" placeholder="אימייל"/>
            //     </FormGroup> 
            //     <FormGroup controlId = "formControlsname" type="text">
            //         <FormLabel>שם משתמש</FormLabel>
            //         <FormControl ref="newnameref" placeholder="שם משתמש חדש"/>
            //     </FormGroup>
            //     <FormGroup controlId = "formControlspass" type="text">
            //         <FormLabel>סיסמא</FormLabel>
            //         <FormControl ref="newpassref" placeholder="סיסמא חדשה"/>
            //     </FormGroup> 
            //     <Button type="button" variant="primary" onClick={()=>this.handleclick()}>אישור</Button>
            // </div>
        );
    }
}

export default UserProperties;