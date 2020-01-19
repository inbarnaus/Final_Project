import React, { Component } from 'react';
import {Navbar, NavDropdown, Button} from 'react-bootstrap';
import {Nav} from 'reactstrap';
import { Link } from 'react-router-dom';
class Navigate extends Component{
    render() {
        return(
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="משתמש" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/user-properties">עריכת פרטי משתמש</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">התנתק</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="הרשמת משתמש חדש" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/register-lawyer">הרשמת עורך-דין חדש</NavDropdown.Item>
                        <NavDropdown.Item href="/register-costumer">הרשמת לקוח חדש</NavDropdown.Item>
                    </NavDropdown>
                    <Button href="/send-report">שלח דיווח</Button>
                    <NavDropdown title="עריכת נתונים" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/add-purchase">הוספת רכישה</NavDropdown.Item>
                        <NavDropdown.Item href="/edit-purchase">עריכת רכישה</NavDropdown.Item>
                        <NavDropdown.Item href="/add-scan">הוספת טופס סריקה</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="הוספת ג'4" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/add-g4">הוספת ג'4 חדש</NavDropdown.Item>
                        <NavDropdown.Item href="/replace-g4">החלפת ג'4 קיים</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="צפייה בנתונים" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/apartments">צפייה בפרטי דירה</NavDropdown.Item>
                        <NavDropdown.Item href="/purchases">צפייה בפרטי רכישה</NavDropdown.Item>
                    </NavDropdown>
                    <Button href="/">דף הבית</Button>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
            
        );
    }
}

export default Navigate;

/*
<nav class="main-menu mobile-menu">
                <ul>
                    <li class="active"><a href="./index.html">דף הבית</a></li>
                </ul>
            </nav>
        </div>
        */
