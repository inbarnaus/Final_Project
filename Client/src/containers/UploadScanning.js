import React, { Component }  from "react";
import '../css/UploadPDF.css'
import { withRouter } from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';

class UploadScanning extends Component {
  
  render(){
    return (
      <Form
        className = "custom-file-translate-scss"
        id='uploadForm' 
        action='http://localhost:8080/addscanning' 
        method='post' 
        encType="multipart/form-data">
          <div class="header">
            <h1>העלאת סריקה</h1>
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
    );
}
}

export default withRouter(UploadScanning);

//   <form
    //   className = "custom-file-translate-scss"
    //   id='uploadScanning' 
    //   action='http://localhost:8080/addscanning' 
    //   method='Post' 
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
    //     <input className="input" type="file" name="sampleFile" />
    //     </div>
    //     <div className="form-group">
          
    //     <label className="w3-text-blue"><b></b></label>
    //     <input className="input" onClick={() => {alert('הקובף הועלה בהצלחה!'); this.props.history.push('/');}}
    //      type="button"/>
    //     </div>
    // </form>