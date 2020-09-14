import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import { Row, Col, Form, Button } from "react-bootstrap";
import '../css/signNewUser.css'
import axios from 'axios';
import address from '../server_address';

class NewUser extends Component { 
  constructor(){
    super();
    this.state = {
      email: '',
      type: true
    }
    this.submit = this.submit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    });
    console.log(this.state);
  }

  handleLawyer = (e) => {
    this.setState({
      type : true
    });
    console.log(this.state);
  }
  handleCostumer = (e) => {
    this.setState({
      type : false
    });
    console.log(this.state);
  }

  async submit(e){
    e.preventDefault();
    let response = await axios.post(address + '/register', this.state);
    if(response.data.succeed){
      alert("משתמש נרשם בהצלחה");
      this.props.history.push('/');
    }
    else{
      alert(response.data.res);
    }
  }
  render(){
    return (
      <Form className = "custom-file-translate-scss"
      id='uploadForm' 
      onSubmit={this.submit}
      encType="multipart/form-data">
      <br></br>
          <Form.Group as={Row} controlId="formHorizontalEmail">
              <Col sm={{ span: 4, offset: 4 }}>
              <Form.Label >
              כתובת מייל
              </Form.Label>
              <Form.Control type="email" name="email" placeholder="הכנס כתובת מייל" onChange={this.handleChange}/>
              </Col>
              <Row></Row>
          </Form.Group>

          <fieldset> 
            <Form.Group as={Row}>
              <Col sm={{ span: 0, offset: 4 }}> 
              <input type="radio" name="type" value="lawyer" defaultChecked onChange={this.handleLawyer}/> עורך דין
              <br></br>
                <input type="radio" name="type" value="client" onChange={this.handleCostumer}/> לקוח 
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
  