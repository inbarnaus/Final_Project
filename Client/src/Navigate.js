import React, { Component } from 'react';
import {Navbar, NavDropdown, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Nav} from 'reactstrap';
import "./Navigate.css";

class Navigate extends Component{
  render() {
    return (
      <div className="container">
        <Navbar className="color-nav" expand="lg">
        <Navbar.Brand as={Link} to="/reports">מקוב-נוף-הוברמן</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="פעולות" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/uploadscanning">הוספת PDF טופס סריקה</NavDropdown.Item>
              {/*<NavDropdown.Item href="/uploadpdf">הוספת PDF מש"ח</NavDropdown.Item>*/}
              <NavDropdown.Item as={Link} to="/searchrepo">חיפוש רשומה</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/addrepo">הוספת רכישה</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/replaceg4">החלפת ג'4</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/addg4">הוספת ג'4</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/changepass">החלף סיסמא</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="/addrepo">הוספת דיווח</Nav.Link> */}
          </Nav>
          <Form inline>
          <Link to="/signnew"><Button variant="outline-secondary" color= "white">רישום משתמש חדש</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Navigate;
