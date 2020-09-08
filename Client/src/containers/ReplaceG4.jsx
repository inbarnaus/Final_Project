import React, { Component }  from "react";
import '../css/AddG4.css'
import { withRouter } from 'react-router-dom';
import {Form, Button, Col} from 'react-bootstrap';
import address from '../server_address';

class ReplaceG4 extends Component {
  
  // handleClick = () => {
  //   return this.props.history.push('/');
  // }

  render(){
    return (
      <Form
        className = "custom-file-translate-scss"
        id='replaceg4' 
        action={address + '/replaceg4'}
        method='Post'
        encType="multipart/form-data">
        <Col>
        <Form.Group>
              <Form.File id="formcheck-api-custom" custom>
                <Form.File.Input name="sampleFile" isValid />
                <Form.File.Label data-browse="file">
                העלה קובץ........
                </Form.File.Label>
              </Form.File>
            </Form.Group>
          
            <Button variant="primary" type="submit" onClick={() => {alert('הקובף הועלה בהצלחה!'); this.props.history.push('/');}}>
              אישור
            </Button>
        </Col>
      </Form>
    //   <body>
    //   <form
    //   className = "custom-file-translate-scss"
    //   id='replaceg4' 
    //   action='http://localhost:8080/replaceg4' 
    //   method='Post'
    //   encType="multipart/form-data">
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
    // </body> 
    );
}
}

export default withRouter(ReplaceG4);