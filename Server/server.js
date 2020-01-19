const data = require('./Stubs/Dal_Stub');
const express = require('express');
const bodyParser = require('body-parser');
const apartments = require('./Domain/Data/Properties/Apartment')
const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/apartments/:block?/:building?/:apartment?', (req, res) => {
<<<<<<< HEAD
=======
    console.log(req);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(res);
>>>>>>> c1c5a19734be465f572ee4fb1219c6664d830b89
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    //console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if (block) {
        filteredProperties = (data.get_buildings(block));
        if (building) {
            filteredProperties = data.get_apartments(block, building);
            if (apartment) {
                filteredProperties = data.get_apartment(block, building, apartment);
            }
        }
    }
    res.send({data: filteredProperties});
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

<<<<<<< HEAD
    if(block && building && apartment)
        filteredProperties = data.set_purchase(block, building, apartment, req.body);

    res.send(filteredProperties);
=======
    if (block) {
        filteredProperties = data.get_buildings(block);
        if (building) {
            filteredProperties = data.get_apartments(building);
            if (apartment) {
                filteredProperties = data.get_apartment(apartment);
            }
        }
    }
    
    res.send("filteredProperties");
>>>>>>> c1c5a19734be465f572ee4fb1219c6664d830b89
});

app.post('/login', (req, res) => {
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));