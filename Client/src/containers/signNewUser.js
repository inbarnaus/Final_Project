import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function NewUser() {
    return(
        <div className="NewUser">
        <Form className="text-center">
            <br></br><br></br>
        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label className="text-center" column sm="1">
            Email
            </Form.Label>
            <Col sm="5">
            <Form.Control placeholder="Enter Email" />
            </Col>
            <Button href = "#" variant="outline-secondary">אישור</Button>
            
        </Form.Group>
        </Form>
        </div>
    );
}