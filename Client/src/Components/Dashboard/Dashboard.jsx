import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar, Nav, Form, NavDropdown, Button, FormControl} from 'react-bootstrap'
//components
//import {Brand, Toggle, type, Collapse} from Navbar
class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">דף הבית</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">שליחת דיווח</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                <Router >
                <Switch>
                    <Route exact path="/">
                    <div>page home</div>
                    </Route>
                    <Route path="/2">
                    <div>page 2</div>
                    </Route>
                    <Route path="/3">
                    <div>page 3</div>
                    </Route>
                </Switch>
                </Router>
            </div>
        );
    }
}

export default Dashboard;
