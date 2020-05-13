import React from "react";
// import { Link } from "react-router-dom";
import { Nav, Navbar, Form, Button, NavDropdown } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";


function App() {
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
      <Nav.Link href="/addrepo">הוספת דיווח</Nav.Link>
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      <Button href = "/signnew" variant="outline-secondary" color= "white">רישום משתמש חדש</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Routes></Routes>
    </div>
  );
}
export default App;