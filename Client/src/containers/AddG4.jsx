import React, {Component} from "react";
import '../css/AddG4.css'
import { withRouter } from 'react-router-dom';
import address from '../server_address'
import {Form, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';

class AddG4 extends Component {
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
    let response = await axios.post(address + '/addg4', data);
    if(response.data.succeed){
      alert("קובץ הועלה בהצלחה");
      this.props.history.push('/');
    }
    else{
      alert(response.data.res);
    }
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
      // action={address + '/addg4'}
      // method='post' 
      onSubmit={this.submit}
      encType="multipart/form-data">

        <div className="header">
            <h1>הוספת קובץ ג'4</h1>
          </div>
        <Col md={{ span: 2, offset: 5 }}>
        <Form.Group>
          <Form.File id="file" name="sampleFile" label="העלה קובץ"  onChange={this.onChangeFile}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          שלח
        </Button>
        </Col>
    </Form>
    //   <form
    //     className = "custom-file-translate-scss"
    //     id='uploadForm' 
    //     // action={address + '/addg4'}
    //     // method='post' 
    //     onSubmit={this.submit}
    //     encType="multipart/form-data">
    //     <div className="form-group">
          
    //     <label className="w3-text-blue"><b></b></label>
    //     <input className="input" type="file" name="sampleFile" onChange={this.onChangeFile}/>
    //     </div>
    //     <div className="form-group">
          
    //     <label className="w3-text-blue"><b></b></label>
    //     <input className="input" type='submit' value={this.state.file ? this.state.file.name : 'העלה קובץ'} />
    //     </div>
    // </form> 
    );
  }
}

export default withRouter(AddG4);
