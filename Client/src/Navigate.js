import React, { Component } from 'react';
import {Navbar, NavDropdown, Button, Form} from 'react-bootstrap';
import {Nav} from 'reactstrap';
import "./Navigate.css";


class Navigate extends Component{
    render() {
        return (
                <div className="container">
                  <Navbar className="color-nav" expand="lg">
                <Navbar.Brand href="/">מקוב-נוף-הוברמן</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown title="פעולות" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/uploadpdf">הוספת PDF</NavDropdown.Item>
                    <NavDropdown.Item href="/searchrepo">חיפוש רשומה</NavDropdown.Item>
                    <NavDropdown.Item href="/addg4">הוספת ג'4</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  {/* <Nav.Link href="/addrepo">הוספת דיווח</Nav.Link> */}
                </Nav>
                <Form inline>
                  <Button href = "/signnew" variant="outline-secondary" color= "white">רישום משתמש חדש</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
                </div>
              );
    }
}

export default Navigate;
