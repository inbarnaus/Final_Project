const system = require('./Domain/System');
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
    //console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if (block) {
        filteredProperties = (system.get_buildings(block));
        if (building) {
            filteredProperties = system.get_apartments(block, building);
            if (apartment) {
                filteredProperties = system.get_apartment(block, building, apartment);
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
        filteredProperties = system.get_purchase(block, building, apartment);
        
    res.send(filteredProperties);
});

app.post('/edit/:block/:building/:apartment', (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if(block && building && apartment)
        filteredProperties = system.set_purchase(block, building, apartment, req.body);

    res.send(filteredProperties);
});

app.post('/login', (req, res) => {
    user_info = req.body;

    if(user_info && system.check_user_info(user_info['username'], user_info['password']))
        return true;

    return false;
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));