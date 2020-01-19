const data = require('./Stubs/Dal_Stub');
const express = require('express');
const bodyParser = require('body-parser');
const apartments = require('./Domain/Data/Properties/Apartment')
const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/apartments/:block?/:building?/:apartment?', (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if (block) {
        filteredProperties = (data.get_buildings(block));
        if (building) {
            filteredProperties = data.get_apartments(block, building);
            if (apartment) {
                filteredProperties = data.get_apartment(block, building, apartment);
            }
        }
    }
    res.send(filteredProperties);
});

app.get('/editGet/:block/:building/:apartment', (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if(block && building && apartment)
        filteredProperties = data.get_purchase(block, building, apartment);
        
    res.send(filteredProperties);
});

app.post('/edit/:block/:building/:apartment', (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if(block && building && apartment)
        filteredProperties = data.set_purchase(block, building, apartment, req.body);

    res.send(filteredProperties);
});

app.post('/login', (req, res) => {
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));