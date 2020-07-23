import React, {Component} from "react";
import '../css/SearchReport.css'
import { withRouter } from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';

class SearchReport extends Component { 
  render(){
    return (
      <Form
        className = "custom-file-translate-scss"
        id='uploadForm' 
        action='http://localhost:8080/api/searchrepo' 
        method='post' 
        encType="multipart/form-data">
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

export default withRouter(SearchReport);

  //   <form
    //   className = "custom-file-translate-scss"
    //   id='uploadForm' 
    //   action='http://localhost:8080/api/searchrepo' 
    //   method='post' 
    //   encType="multipart/form-data">
    //     <div className="form-group">
    //     <label className="w3-text-blue"><b>מס' בלוק</b></label>
    //     <input className="w3-input w3-border" type="text" name="block"/>
    //     </div>
    //     <div className="form-group">
    //     <label className="w3-text-blue"><b>מס' בניין</b></label>
    //     <input className="w3-input w3-border" type="text" name="building"/>
    //     </div>
    //     <div className="form-group">
    //     <label className="w3-text-blue"><b>מס' דירה</b></label>
    //     <input className="w3-input w3-border" type="text" name="apartment"/>
    //     </div>
        
    //     <div className="form-group">
          
    //     <label className="w3-text-blue"><b></b></label>
    //     <input className="input" type='submit' value='submit!' />
    //     </div>
    // </form> 