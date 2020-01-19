const data = require('./Stubs/Dal_Stub');
const express = require('express');
const bodyParser = require('body-parser');
//const apartments
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
            filteredProperties = data.get_apartments(block, building);
            if (apartment) {
                filteredProperties = data.get_apartment(block, building, apartment);
            }
        }
    }
    res.send({data: filteredProperties});
});


app.post('/apartments/:block/:building/:apartment', (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

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
});

app.post('/login', (req, res) => {
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));