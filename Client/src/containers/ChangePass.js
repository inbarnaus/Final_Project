import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import { Row, Col, Form, Button } from "react-bootstrap";
import '../css/signNewUser.css'
import axios from 'axios';
import address from '../server_address';

class ChangePass extends Component { 
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      new_password: ''
    }
    this.submit = this.submit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    });
    console.log(this.state);
  }


  async submit(e){
    e.preventDefault();
    const {email, password, new_password} = this.state;
    let body = {
        email: email,
        password: password,
        new_password: new_password
    };
    let response = await axios.post(address + '/changePassword', body);
    if(response.data.succeed){
      alert("סיסמא שונתה בהצלחה");
    }
    else{
      alert(response.data.res);
    }
  }
  render(){
    return (
      <Form className = "custom-file-translate-scss"
      id='uploadForm' 
      onSubmit={this.submit}
      encType="multipart/form-data">
      <br></br>
          <Form.Group as={Row} controlId="formHorizontalEmail">
              <Col sm={{ span: 4, offset: 4 }}>
              <Form.Label >
              כתובת מייל
              </Form.Label>
              <Form.Control type="email" name="email" placeholder="הכנס כתובת מייל" onChange={this.handleChange}/>
              <Form.Label >
              סיסמא
              </Form.Label>
              <Form.Control type="password" name="password" placeholder="הכנס סיסמא מקורית" onChange={this.handleChange}/>
              <Form.Label >
              סיסמא חדשה
              </Form.Label>
              <Form.Control type="password" name="new_password" placeholder="הכנס סיסמא חדשה" onChange={this.handleChange}/>
              
              </Col>
              <Row></Row>
          </Form.Group>

          <Form.Group as={Row}>
              <Col sm={{ span: 1, offset: 5 }}>
              <Button type="submit">submit</Button>
              </Col>
          </Form.Group>
          </Form>
          
          );
    };
}
  
  export default withRouter(ChangePass);
  