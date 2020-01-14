//import {Dal_stub} from './Stubs/Dal_Stub';

//import './Stubs/Dal_Stub.js';
// import Dal_stub from './Stubs/Dal_Stub.js';

const data = require('./Stubs/Dal_Stub');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/apartments/:block?/:building?/:apartment?', (req, res) => {
    //console.log(data instanceof Dal_stub);
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if (block) {
        (data.get_buildings(block)).toString() ? filteredProperties = (data.get_buildings(block)).toString(): null;
        if (building) {
            data.get_appartements(block, building).toString()? filteredProperties = data.get_appartements(block, building).toString(): null;
            if (apartment) {
                data.get_appartement(block, building, apartment).toString() ? filteredProperties = data.get_appartement(block, building, apartment).toString(): null;
            }
        }
    }

    res.send(filteredProperties);
});

app.post('/apartments/:block?/:building?/:apartment?', (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if (block) {
        data.get_buildings(block).toString() === block ? filteredProperties = data.get_buildings(block).toString(): null;
        if (building) {
            data.get_buildings(building).toString() === building ? filteredProperties = data.get_appartements(building).toString(): null;
            if (apartment) {
                data.get_buildings(apartment).toString() === apartment ? filteredProperties = data.get_appartement(apartment).toString(): null;
            }
        }
    }

    res.send(filteredProperties);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));