import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/css/font-awesome.min.css";
//import "bootstrap/dist/css/flaticon.css";
//import "bootstrap/dist/css/owl.carousel.min.css";
//import "bootstrap/dist/css/jquery-ui.min.css";
//import "bootstrap/dist/css/nice-select.css";
//import "bootstrap/dist/css/magnific-popup.css";
//import "bootstrap/dist/css/slicknav.min.css";
//import "bootstrap/dist/css/style.css";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
