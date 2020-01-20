const system = require('./Domain/System');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mail_handler = require('./Domain/Mail/MailHandler');
const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var schedule = require('node-schedule');
 
/*var j = schedule.scheduleJob('00 00 08 1-12 0-7', function(){
  console.log('The answer to life, the universe, and everything!');
});
*/
var j = schedule.scheduleJob('00 3 * * *', mail_handler);

app.get('/apartments/:block?/:building?/:apartment?', (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

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
    let user_info = req.body;

    if(user_info && system.check_user_info(user_info['username'], user_info['password']))
        res.send({succeed: true});
    else
        res.send({succeed: false});
});

//Return: rendom password
app.post('/register/lawyer', (req,res) => {
    let user_info = req.body;
    if(user_info && user_info['username'] && user_info['email']) {
        system.get_all_registrated_users().forEach(user => {
            if(element.username == user_info['username'] || element.email == user_info['email'])
                return false;
        });
        return system.add_lawyer(user_info['username'], user_info['email']);
    }
});

app.get('/unreported', (req, res) => {
    return system.get_all_unreported_purchases();
});

//TODO
app.post('/login/forgotpass', (req, res) => {

});

//TODO
app.post('/register/client', (req,res) => {
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));