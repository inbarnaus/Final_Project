//import {Dal_stub} from './Stubs/Dal_Stub';

//import './Stubs/Dal_Stub.js';
// import Dal_stub from './Stubs/Dal_Stub.js';

const data = require('./Stubs/Dal_Stub').prototype;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/apartments/:block?/:building?/:apartment?', (req, res) => {
    console.log(req);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(res);
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    //console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if (block) {
        filteredProperties = (data.get_buildings(block));
        if (building) {
            filteredProperties = data.get_appartements(block, building);
            if (apartment) {
                filteredProperties = data.get_appartement(block, building, apartment);
            }
        }
    }
    res.send({data: filteredProperties});
});

app.post('/apartments/:block?/:building?/:apartment?', (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if (block) {
        filteredProperties = data.get_buildings(block).toString();
        if (building) {
            filteredProperties = data.get_appartements(building).toString();
            if (apartment) {
                filteredProperties = data.get_appartement(apartment).toString();
            }
        }
    }
    
    res.send("filteredProperties");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));