import React, { Component }  from "react";
import '../css/UploadPDF.css'
import { withRouter } from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';
import address from '../server_address';

class UploadScanning extends Component {

  constructor (){
    super();
    this.state = {
        block: '',
        building: '',
        apartment: '',
        file: null
    }
    
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    });
    console.log(this.state);
  }

  onChangeFile=event=>{
    this.setState({
      file: event.target.files[0],
    })
  }

  render(){
    return (
      <Form
        className = "custom-file-translate-scss"
        id='uploadForm' 
        action={address + '/addscanning'}
        method='post' 
        encType="multipart/form-data">
          <div class="header">
            <h1>הוספת קובץ סריקה</h1>
          </div>
          <Col md={{ span: 8, offset: 5 }}>
            <Form.Group controlId="block">
              <Row><Form.Label>מספר בלוק</Form.Label></Row>
              <Form.Control name="block" type="text" placeholder="הכנס מספר בלוק" onChange={this.handleChange}/>
            </Form.Group>
          
            <Form.Group controlId="building">
              <Row><Form.Label>מספר בניין</Form.Label></Row>
              <Form.Control name="building" type="text" placeholder="הכנס מספר בניין" onChange={this.handleChange}/>
            </Form.Group>
          
            <Form.Group controlId="apartment">
              <Row><Form.Label>מספר דירה</Form.Label></Row>
              <Form.Control name="apartment" type="text" placeholder="הכנס מספר דירה" onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.File id="formcheck-api-custom" custom>
                <Form.File.Input name="sampleFile" isValid onChange={this.onChangeFile}/>
                <Form.File.Label data-browse="file">
                {this.state.file ? this.state.file['name'] : "העלה קובץ........"}
                </Form.File.Label>
              </Form.File>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" onClick={alert("הקובץ הועלה")}>
              אישור
            </Button>
        </Col>
      </Form>
    );
  }
}
export default withRouter(UploadScanning);
