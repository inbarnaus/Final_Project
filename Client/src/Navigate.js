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
                    <NavDropdown.Item href="/uploadscanning">הוספת PDF טופס סריקה</NavDropdown.Item>
                    <NavDropdown.Item href="/uploadpdf">הוספת PDF מש"ח</NavDropdown.Item>
                    <NavDropdown.Item href="/searchrepo">חיפוש רשומה</NavDropdown.Item>
                    <NavDropdown.Item href="/addrepo">הוספת רכישה</NavDropdown.Item>
                    <NavDropdown.Item href="/replaceg4">החלפת ג'4</NavDropdown.Item>
                    <NavDropdown.Item href="/addg4">הוספת ג'4</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/changepass">החלף סיסמא</NavDropdown.Item>
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
