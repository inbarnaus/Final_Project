import React, {Component} from "react";
import '../css/SearchReport.css'
import { withRouter } from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import ShowSearch from "./ShowSearch";
import address from '../server_address';

class SearchReport extends Component { 

  constructor (){
    super();
    this.state = {
        block: '',
        building: '',
        apartment: '',
        report: null
    }
  }

  submit = async(e) => {
    e.preventDefault();
    const {block,building,apartment} = this.state;

    let body = {
      block,
      building,
      apartment
    }
    let response = await axios.post(address + '/searchrepo',body);
    console.log(response);
    if(response.data.succeed)
      this.setState({
        report: response.data.res
      });
    else
      alert(response.data.res);
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    });
  }

  render(){
    const {report} = this.state;
    // console.log(report);
    return (
      <Form
        className = "custom-file-translate-scss"
        id='uploadForm' 
        onSubmit={this.submit}
        encType="multipart/form-data">
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
          
            <Button variant="primary" type="submit">
              אישור
            </Button>
        </Col>
        <Col>
          {
            report
            ?
            <ShowSearch report={this.state.report}/>
            : 
            <div></div>
          }
        </Col>
      </Form>
          );
      };
}

export default withRouter(SearchReport);
