import React, {Component} from "react";
import '../css/SearchReport.css'
import { withRouter } from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';

class AddReport extends Component { 
  render(){
    return (
      <Form
        className = "custom-file-translate-scss"
        id='uploadForm' 
        action='http://localhost:8080/addrepo' 
        method='post' 
        encType="multipart/form-data">
          <div className="header">
            <h1>הוספת רכישה</h1>
          </div>
          <Col md={{ span: 8, offset: 5 }}>
            <Form.Group controlId="block">
              <Row><Form.Label>מספר בלוק</Form.Label></Row>
              <Form.Control name="block" type="text" placeholder="הכנס מספר בלוק"/>
            </Form.Group>
          
            <Form.Group controlId="building">
              <Row><Form.Label>מספר בניין</Form.Label></Row>
              <Form.Control name="building" type="text" placeholder="הכנס מספר בניין"/>
            </Form.Group>
          
            <Form.Group controlId="apartment">
              <Row><Form.Label>מספר דירה</Form.Label></Row>
              <Form.Control name="apartment" type="text" placeholder="הכנס מספר דירה" />
            </Form.Group>
          
            <Button variant="primary" type="submit">
              אישור
            </Button>
        </Col>
      </Form>
          );
      };
}

export default withRouter(AddReport);