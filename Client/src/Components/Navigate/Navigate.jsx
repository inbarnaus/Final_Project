import React, { Component } from 'react';

class Navigate extends Component{
    render() {
        return(
            <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/flaticon.css" type="text/css"/>
            <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/nice-select.css" type="text/css"/>
            <link rel="stylesheet" href="css/magnific-popup.css" type="text/css"/>
            <link rel="stylesheet" href="css/slicknav.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/style.css" type="text/css"/>
        <div>
            <nav class="main-menu mobile-menu">
                <ul>
                    <li><a href="#">משתמש</a>
                        <ul class="drop-menu">
                            <li><a href="user-properties.html">עריכת פרטי משתמש</a></li>
                            <li><a href="logout.html">התנתק</a></li>
                        </ul>
                    </li>

                    <li><a href="#">הרשמת משתמש</a>
                        <ul class="drop-menu">
                            <li><a href="add-costumer.html">הרשמת לקוח חדש</a></li>
                            <li><a href="add-lawyer.html">הרשמת עורך-דין חדש</a></li>
                        </ul>
                    </li>
                    <li><a href="./report.html">שליחת דיווח</a></li>
                    <li><a href="#">עריכת נתונים</a>
                        <ul class="drop-menu">
                            <li><a href="add-purchase.html">הוספת רכישה</a></li>
                            <li><a href="edit-purchase.html">עריכת רכישה</a></li>
                            <li><a href="add-scanning.html">הוספת טופס סריקה</a></li>
                        </ul>
                    </li>
                    <li><a href="#">הוספת ג'4</a>
                        <ul class="drop-menu">
                            <li><a href="replace-g4.html">החלפת ג'4 קיים</a></li>
                            <li><a href="add-g4.html">הוספת ג'4 חדש</a></li>
                        </ul>
                    </li>
                    <li><a href="#">צפייה בנתונים</a>
                        <ul class="drop-menu">
                            <li><a href="get-g4.html">צפייה בפרטי דירה</a></li>
                            <li><a href="get-purchase.html">צפייה בפרטי רכישה</a></li>
                        </ul>
                    </li>
                    <li class="active"><a href="./index.html">דף הבית</a></li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Navigate;