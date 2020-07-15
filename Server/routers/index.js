// import React from "react";
// // import { Link } from "react-router-dom";
// import { Nav, Navbar, Form, Button, NavDropdown } from "react-bootstrap";
// // import { LinkContainer } from "react-router-bootstrap";
// import "./App.css";
// import Routes from "./Routes";

// const data = require('../Stubs/Dal_Stub').prototype;
// const system = require('../Domain/System')
// const express = require('express');
// const bodyParser = require('body-parser');
// const response = require('./ResponseObjectCreator');
// const app = express();
// const port = 3000;

// var urlEncodeParser = app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/apartments/:block?/:building?/:apartment?', (req, res) => {
//     //console.log(data instanceof Dal_stub);
//     const block = req.params.block;
//     const building = req.params.building;
//     const apartment = req.params.apartment;
//     let filteredProperties;
//     console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

//     if (block) {
//         filteredProperties = (data.get_buildings(block));
//         if (building) {
//             filteredProperties = data.get_apartments(block, building);
//             if (apartment) {
//                 filteredProperties = data.get_apartment(block, building, apartment);
//             }
//         }
//         res.send(response.ResponseObject(true, filteredProperties, "get apartments succeded!"));
//     }
//     else 
//         res.send(response.ResponseObject(false, {}, "not enough information!"));
// });

// app.get('/purchases/:block/:building/:apartment', (req, res)=>{
//     getPurchase(req, res);
// });

// app.get('/getEdit/:block/:building/:apartment', (req, res) => {
//     getPurchase(req, res);
// });

// const getPurchase = (req, res) => {
//     const block = req.params.block;
//     const building = req.params.building;
//     const apartment = req.params.apartment;
//     let filteredProperties;
//     console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

//     if(building && block && apartment){
//         filteredProperties = (data.get_purchase(block, building, apartment));
//         res.send(response.ResponseObject(true, filteredProperties, "get purchase succeded!"));
//     }
//     else
//         res.send(res.send(response.ResponseObject(false, filteredProperties, "get purchase succeded!")));
// }

// //Structure for json in editing purchase: {"apartment_idx":{"block":1,"building":2,"apartment":1},"buyer1":{"id":111,"name":"avabash"},"buyer2":null,"parking1":1,"parking2":2,"garage_idx":1,"purchase_date":"1/1/2020","price":12000,"assesment_number":1,"reference":1,"bank":"leumi","comments":false,"scanning_form":null,"last_reporting_date":"29/1/2020","was_reported":false}
// app.post('/edit/:block/:building/:apartment', (req, res) => {
//     console.log("receiving data...");
//     var block = req.body.apartment_idx.block;
//     var building = req.body.apartment_idx.building;
//     var apartment = req.body.apartment_idx.apartment;
    
//     system.set_purchase(block, building, apartment);

//     console.log("information updated");
//     res.send(res.send(response.ResponseObject(true, {}, "set purchase succeded!")));
// });


// app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`));