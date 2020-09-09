import React, { Component }  from "react";
import '../css/AddG4.css'
import { withRouter } from 'react-router-dom';
import {Form, Button, Col} from 'react-bootstrap';
import address from '../server_address';
import axios from 'axios';

class ReplaceG4 extends Component {
  
  constructor (){
    super();
    this.state = {
        file: null
    }
    // this.submit = this.submit.bind(this);
  }

  submit = async(e) =>{
    e.preventDefault();
    const {file} = this.state;
    const data = new FormData();
    data.append('file', file);
    let response = await axios.post(address + '/replaceg4', data);
    if(response.data.succeed){
      alert("קובץ הועלה בהצלחה");
    }
    else{
      alert(response.data.res);
    }
  }

  onChangeFile=event=>{
    console.log("c");
    this.setState({
      file: event.target.files[0],
    })
  }

  render(){
    return (
      <Form
        className = "custom-file-translate-scss"
        id='replaceg4' 
        // action={address + '/replaceg4'}
        // method='Post'
        onSubmit={this.submit}
        encType="multipart/form-data">
        <Col>
        <Form.Group>
              <Form.File id="formcheck-api-custom" custom>
                <Form.File.Input name="sampleFile" isValid onChange={this.onChangeFile}/>
                <Form.File.Label data-browse="file">
                {this.state.file ? this.state.file.name : "העלה קובץ........"}
                </Form.File.Label>
              </Form.File>
            </Form.Group>
          
            <Button variant="primary" type="submit">
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