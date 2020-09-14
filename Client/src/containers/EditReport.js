import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import '../css/EditReport.css'
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import axios from 'axios';
import address from "../server_address";

class EditReport extends Component { 
    constructor(props){
        super(props);
        this.state = props.report;
        console.log(this.state);
    }
    
  submit = async(e) => {
    e.preventDefault();

    let response = await axios.post(address + '/addPurchase',this.state);
    console.log(response);
    if(response.data.succeed){
        alert("רכישה עודכנה")
        this.props.history.push('/')
    }
    else{
        response = await axios.post(address + '/edit/' + this.state.blockNum + '/' + this.state.buildNum + '/' + this.state.apartNum, this.state);
        if(response.data.succeed){
            alert("רכישה עודכנה")
            this.props.history.push('/')
        }
        else
            alert(response.data.res);
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    });
  }

    render(){
        return (
        <Form 
            className = "custom-file-translate-scss"
            id='uploadForm' 
            encType="multipart/form-data"
            onSubmit={this.submit}
            >
                <Container fluid="md">
            <h1>עריכת פרטי רכישה</h1>
            <br></br>
            <br></br>
            <br></br>
            <p>פרטי רוכש/ים</p>
            <br></br>
            
            <Row >
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>שם רוכש 1</Form.Label>
                        <Form.Control type="text" name="buyerName1" placeholder={this.state.buyerName1 || "הכנס שם"} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>תז רוכש 1</Form.Label>
                        <Form.Control type="text" name="buyerId1" placeholder={this.state.buyerId1 || "הכנס תז"} onChange={this.handleChange}/>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>שם רוכש 2</Form.Label>
                        <Form.Control type="text" name="buyerName2" placeholder={this.state.buyerName2 || "הכנס שם"} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>תז רוכש 2</Form.Label>
                        <Form.Control type="text" name="buyerId2" placeholder={this.state.buyerId2 || "הכנס תז"} onChange={this.handleChange}/>
                    </Form.Group>
                </Col>
            </Row>
            
            <p>פרטי הרשומה</p>
            <br></br>
            <br></br>
            <Row md={3}>
                    <Form.Group>
                        <Form.Label>מספר דירה</Form.Label>
                        <Form.Control type="text" name="apartNum" value={this.state.apartNum} placeholder={this.state.apartNum} readOnly="readOnly" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר בניין</Form.Label>
                        <Form.Control type="text" name="buildNum" value={this.state.buildNum} placeholder={this.state.buildNum} readOnly="readOnly" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר בלוק</Form.Label>
                        <Form.Control type="text" name="blockNum" value={this.state.blockNum} placeholder={this.state.blockNum} readOnly="readOnly" />
                    </Form.Group>
            </Row>

            {/* <Row md={3}>
                    <Form.Group>
                        <Form.Label>מספר כיוונים</Form.Label>
                        <Form.Control type="text" name="dir" placeholder={this.state.dir} disabled onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר חדרים</Form.Label>
                        <Form.Control type="text" name="roomNum" placeholder={this.state.roomNum} disabled onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר קומה</Form.Label>
                        <Form.Control type="text" name="level" placeholder={this.state.level} disabled onChange={this.handleChange}/>
                    </Form.Group>
            </Row> */}
            
            {/* <Row md={3}>
                    <Form.Group>
                        <Form.Label>שטח מרפסת/גינה</Form.Label>
                        <Form.Control type="text" name="balconyArea" placeholder={this.state.balconyArea} disabled onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>שטח דירה אקווילנטי</Form.Label>
                        <Form.Control type="text" name="apartAreaAq" placeholder={this.state.apartAreaAq} disabled onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>שטח דירה</Form.Label>
                        <Form.Control type="text" name="apartArea" placeholder={this.state.apartArea} disabled onChange={this.handleChange}/>
                    </Form.Group>
            </Row> */}
            <br></br>
            
            <Row md={3}>
                    <Form.Group>
                        <Form.Label>מספר חניה 2</Form.Label>
                        <Form.Control type="text" name="parking2" placeholder={this.state.parking2 || this.state.parking2} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר חניה 1</Form.Label>
                        <Form.Control type="text" name="parking1" placeholder={this.state.parking1 || this.state.parking1} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר חניות</Form.Label>
                        <Form.Control type="text" name="parkingNum" placeholder={this.state.parkingNum} onChange={this.handleChange}/>
                    </Form.Group>
            </Row>

            <Row md={3}>
                    <Form.Group>
                        <Form.Label>מחיר דירה</Form.Label>
                        <Form.Control type="text" name="price" placeholder={this.state.price} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>שטח מחסן</Form.Label>
                        <Form.Control type="text" name="warehouseArea" placeholder={this.state.warehouseArea} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר מחסן</Form.Label>
                        <Form.Control type="text" name="warehouseNum" placeholder={this.state.warehouseNum} onChange={this.handleChange}/>
                    </Form.Group>
            </Row>

            <Col>
            <Form.Group className="align-items-center">
                <Form.Label>הערות</Form.Label>
                {/* <textarea name="notes" type="text" as="textarea" rows="3">{this.state.report.notes}</textarea> */}
                <Form.Control name="notes" type="text" as="textarea" rows="3" defaultValue={this.state.notes} onChange={this.handleChange}/>
                    {/* {this.state.report.notes}
                </Form.Control> */}
            </Form.Group>
            </Col>

            <br></br>
            <div className="item">
                <Row>
                    <Col>
                        <input  type="date" id="start" name="purchaseDate" onChange={this.handleChange}/>
                    </Col>
                    <Col>
                        <p>הכנס תאריך רכישה</p>
                    </Col>
                </Row>
            </div>
            
            <div className="btn-block">
            <Button type="submit">שלח</Button>
            </div>

            </Container>
            </Form>
            // </div>

        );
    };
}

export default withRouter(EditReport);