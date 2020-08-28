import React, { Component }  from "react";
import '../css/UploadPDF.css'
import { withRouter } from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';

class UploadPDF extends Component {
  render(){
    return (
      <Form
        className = "custom-file-translate-scss"
        id='uploadForm' 
        action='http://localhost:8080/uploadpdf' 
        method='post' 
        encType="multipart/form-data">
          <div class="header">
            <h1>PDF הוספת קובץ</h1>
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

            <Form.Group>
              <Form.File id="formcheck-api-custom" custom>
                <Form.File.Input name="sampleFile" isValid />
                <Form.File.Label data-browse="file">
                העלה קובץ........
                </Form.File.Label>
              </Form.File>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" onClick={() => {alert('הקובף הועלה בהצלחה!'); this.props.history.push('/');}}>
              אישור
            </Button>
        </Col>
      </Form>
    //   <form 
    //   className = "custom-file-translate-scss"
    //   id='uploadForm' 
    //   action='http://localhost:8080/uploadpdf' 
    //   method='post' 
    //   encType="multipart/form-data">
    //     <div class="form-group">
    //     <label class="w3-text-blue"><b>מס' בלוק</b></label>
    //     <input class="w3-input w3-border" type="text" name="block"/>
    //     </div>
    //     <div class="form-group">
    //     <label class="w3-text-blue"><b>מס' בניין</b></label>
    //     <input class="w3-input w3-border" type="text" name="building"/>
    //     </div>
    //     <div class="form-group">
    //     <label class="w3-text-blue"><b>מס' דירה</b></label>
    //     <input class="w3-input w3-border" type="text" name="apartment"/>
    //     </div>
    //     <div class="form-group">
          
    //     <label class="w3-text-blue"><b></b></label>
    //     <input className="input" type="file" name="sampleFile" />
    //     </div>
    //     <div class="form-group">
          
    //     <label class="w3-text-blue"><b></b></label>
    //     <input className="input" type='submit' onClick={() => {alert('הקובף הועלה בהצלחה!');}} value='submit!' />
    //     </div>
    // </form> 
    );
  }
}
export default withRouter(UploadPDF);
