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
                <Form.Label >
                דוא"ל
                </Form.Label>
                <Col sm={5}>
                <Form.Control type="email" name="mail"placeholder="הכנס דוא'ל" />
                </Col>
                <Row></Row>
            </Form.Group>

            <fieldset> 
    <Form.Group as={Row}>
      
      <Col sm={{ span: 8, offset: 2 }}> 
       <input type="radio" name="type" value="lawyer" defaultChecked /> עורך דין
       <br></br>
        <input type="radio" name="type" value="client" /> לקוח 
       </Col>
     </Form.Group>
  </fieldset>
  <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 5 }}>
                <Button type="submit">submit</Button>
                {/* onClick={() => {alert('משתמש הוסף בהצלחה!')}} */}
                </Col>
            </Form.Group>
            </Form>
            );
        };
  }
  
  export default withRouter(NewUser);
  