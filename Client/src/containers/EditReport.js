import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import '../css/EditReport.css'
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import axios from 'axios';

class EditReport extends Component { 
    constructor(){
        super();
        this.state = {
            // report:{
            //     apartArea: '',
            //     apartAreaAq: '',
            //     apartMMDprice: '',
            //     apartNum: '',
            //     apartNumPrice: '',
            //     apartTenantPrice: '',
            //     balconyArea: '',
            //     blockNum: '',
            //     buildNum: '',
            //     dir: '',
            //     level: '',
            //     notes: '',
            //     parkingNum: '',
            //     parkingQuantity1: '',
            //     parkingQuantity2: '',
            //     roomNum: '',
            //     warehouseArea: '',
            //     warehouseNum: ''
            // }
            report: {
                apartArea: 70,
                apartAreaAq: "-",
                apartMMDprice: "-",
                apartNum: 2,
                apartNumPrice: 1200000,
                apartTenantPrice: 900000,
                balconyArea: 10,
                blockNum: 112,
                buildNum: 1,
                dir: 5,
                level: 2,
                notes: "היי, שלום עולם",
                parkingNum: 1,
                parkingQuantity1: 12,
                parkingQuantity2: "-",
                roomNum: 2,
                warehouseArea: 5,
                warehouseNum: 1
            }
        }
    }

    async componentDidMount(){
        axios.get('/editrepo')
        .then(response => {
            // console.log(response.data.res)
            // this.setState({
            //     report: response.data.res
            // })
        })
    }

    render(){
        return (
            // <div className="testbox">
        <Form 
            className = "custom-file-translate-scss"
            id='uploadForm' 
            action='http://localhost:8080/addPurchase' 
            method='post' 
            encType="multipart/form-data">
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
                        <Form.Label>תז רוכש 1</Form.Label>
                        <Form.Control type="text" name="idclient1" placeholder="הכנס תז" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>שם רוכש 1</Form.Label>
                        <Form.Control type="text" name="nameclient1" placeholder="הכנס שם" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>תז רוכש 2</Form.Label>
                        <Form.Control type="text" name="idclient2" placeholder="הכנס תז" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>שם רוכש 2</Form.Label>
                        <Form.Control type="text" name="nameclient2" placeholder="הכנס שם" />
                    </Form.Group>
                </Col>
            </Row>
            
            <p>פרטי הרשומה</p>
            <br></br>
            <br></br>
            <Row md={3}>
                    <Form.Group>
                        <Form.Label>מספר דירה</Form.Label>
                        <Form.Control type="text" name="apart" value={this.state.report.apartNum} placeholder={this.state.report.apartNum} readOnly="readOnly" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר בניין</Form.Label>
                        <Form.Control type="text" name="build" value={this.state.report.buildNum} placeholder={this.state.report.buildNum} readOnly="readOnly" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר בלוק</Form.Label>
                        <Form.Control type="text" name="block" value={this.state.report.blockNum} placeholder={this.state.report.blockNum} readOnly="readOnly" />
                    </Form.Group>
            </Row>

            <Row md={3}>
                    <Form.Group>
                        <Form.Label>מספר כיוונים</Form.Label>
                        <Form.Control type="text" name="dir" placeholder={this.state.report.dir} disabled />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר חדרים</Form.Label>
                        <Form.Control type="text" name="roomNum" placeholder={this.state.report.roomNum} disabled/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר קומה</Form.Label>
                        <Form.Control type="text" name="level" placeholder={this.state.report.level} disabled />
                    </Form.Group>
            </Row>
            
            <Row md={3}>
                    <Form.Group>
                        <Form.Label>שטח מרפסת/גינה</Form.Label>
                        <Form.Control type="text" name="balconyArea" placeholder={this.state.report.balconyArea} disabled />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>שטח דירה אקווילנטי</Form.Label>
                        <Form.Control type="text" name="apartAreaAq" placeholder={this.state.report.apartAreaAq} disabled/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>שטח דירה</Form.Label>
                        <Form.Control type="text" name="apartArea" placeholder={this.state.report.apartArea} disabled />
                    </Form.Group>
            </Row>
            <br></br>
            
            <Row md={3}>
                    <Form.Group>
                        <Form.Label>מספר חניה 2</Form.Label>
                        <Form.Control type="text" name="parkingQuantity2" placeholder={this.state.report.parkingQuantity2} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר חניה 1</Form.Label>
                        <Form.Control type="text" name="parkingQuantity1" placeholder={this.state.report.parkingQuantity1}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר חניות</Form.Label>
                        <Form.Control type="text" name="parkingNum" placeholder={this.state.report.parkingNum} />
                    </Form.Group>
            </Row>

            <Row md={3}>
                    <Form.Group>
                        <Form.Label>מחיר דירה</Form.Label>
                        <Form.Control type="text" name="apartNumPrice" placeholder={this.state.report.apartNumPrice} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>שטח מחסן</Form.Label>
                        <Form.Control type="text" name="warehouseArea" placeholder={this.state.report.warehouseArea}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>מספר מחסן</Form.Label>
                        <Form.Control type="text" name="warehouseNum" placeholder={this.state.report.warehouseNum} />
                    </Form.Group>
            </Row>

            <Col>
            <Form.Group className="align-items-center">
                <Form.Label>הערות</Form.Label>
                {/* <textarea name="notes" type="text" as="textarea" rows="3">{this.state.report.notes}</textarea> */}
                <Form.Control name="notes" type="text" as="textarea" rows="3" defaultValue={this.state.report.notes}/>
                    {/* {this.state.report.notes}
                </Form.Control> */}
            </Form.Group>
            </Col>

            <br></br>
            <div className="item">
                <Row>
                    <Col>
                        <input  type="date" id="start" name="purchaseDate"/>
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