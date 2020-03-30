import React, { Component } from 'react';
import {Navbar, NavDropdown, Button} from 'react-bootstrap';
import {Nav} from 'reactstrap';
import { Link } from 'react-router-dom';
class Navigate extends Component{
    render() {
        return(
        
	  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	      <a class="navbar-brand" href="/">דף הבית</a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>

	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
				<div class="dropdown nav-item"><a aria-haspopup="true" aria-expanded="false" id="basic-nav-dropdown" class="dropdown-toggle nav-link" role="button">משתמש</a>
					<div aria-labelledby="basic-nav-dropdown" class="dropdown-menu">
						<a href="/user-properties" class="dropdown-item">עריכת פרטי משתמש</a>
						<div class="dropdown-divider" role="separator"></div>
						<a href="/" class="dropdown-item">התנתק</a>
					</div>
				</div>
			  
				<div class="dropdown nav-item"><a aria-haspopup="true" aria-expanded="false" id="basic-nav-dropdown" class="dropdown-toggle nav-link" role="button">הרשמת משתמש חדש</a>
					<div aria-labelledby="basic-nav-dropdown" class="dropdown-menu">
						<a href="/register-lawyer" class="dropdown-item">הרשמת עורך-דין חדש</a>
						<a href="/register-costumer" class="dropdown-item">הרשמת לקוח חדש</a>
					</div>
				</div>
				
			  <li class="nav-item"><a href="/reporter" class="nav-link">שליחת דיווח</a></li>
			  
			  <div class="dropdown nav-item"><a aria-haspopup="true" aria-expanded="false" id="basic-nav-dropdown" class="dropdown-toggle nav-link" role="button">עריכת נתונים</a>
				<div aria-labelledby="basic-nav-dropdown" class="dropdown-menu">
					<a href="/add-get-purchase" class="dropdown-item">הוספת רכישה</a>
					<a href="/edit-get-purchase" class="dropdown-item">עריכת רכישה</a>
					<a href="/add-get-scan" class="dropdown-item">הוספת טופס סריקה</a>
				</div>
			</div>
			  
			  <div class="dropdown nav-item"><a aria-haspopup="true" aria-expanded="false" id="basic-nav-dropdown" class="dropdown-toggle nav-link" role="button">הוספת ג'4</a>
				<div aria-labelledby="basic-nav-dropdown" class="dropdown-menu">
					<a href="/add-g4" class="dropdown-item">הוספת ג'4 חדש</a>
					<a href="/replace-g4" class="dropdown-item">החלפת ג'4 קיים</a>
				</div>
			</div>
			  
			  <div class="dropdown nav-item"><a aria-haspopup="true" aria-expanded="false" id="basic-nav-dropdown" class="dropdown-toggle nav-link" role="button">צפייה בנתונים</a>
				<div aria-labelledby="basic-nav-dropdown" class="dropdown-menu">
					<a href="/details-get" class="dropdown-item">צפייה בפרטי דירה</a>
					<a href="/unreported" class="dropdown-item">רכישות שלא דווחו</a>
				</div>
			</div>

	          <li class="nav-item"><a href="/" class="nav-link">דף הבית</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>    
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
