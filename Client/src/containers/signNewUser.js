import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import { Row, Col, Form, Button } from "react-bootstrap";
import '../css/signNewUser.css'

class NewUser extends Component { 
    render(){
      return (
        <Form className = "custom-file-translate-scss"
        id='uploadForm' 
        action='http://localhost:8080/register' 
        method='post' 
        encType="multipart/form-data">
        <br></br>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Col sm={{ span: 4, offset: 4 }}>
                <Form.Label >
                כתובת מייל
                </Form.Label>
                <Form.Control type="email" name="mail" placeholder="הכנס כתובת מייל"/>
                </Col>
                <Row></Row>
            </Form.Group>

            <fieldset> 
              <Form.Group as={Row}>
                <Col sm={{ span: 0, offset: 4 }}> 
                <input type="radio" name="type" value="lawyer" defaultChecked /> עורך דין
                <br></br>
                  <input type="radio" name="type" value="client" /> לקוח 
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group as={Row}>
                <Col sm={{ span: 1, offset: 5 }}>
                <Button type="submit">submit</Button>
                </Col>
            </Form.Group>
            </Form>
            
            );
        };
  }
  
  export default withRouter(NewUser);
  