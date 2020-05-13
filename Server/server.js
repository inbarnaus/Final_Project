const system = require('./Domain/System');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();
//const mongoose = require('./DataAccess/mongoose');

const port = 8080;
app.use(fileUpload());
// const mail_handler = require('./Domain/Mail/MailHandler')

app.set('port', process.env.PORT || port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
 
/*var j = schedule.scheduleJob('00 00 08 1-12 0-7', function(){
  console.log('The answer to life, the universe, and everything!');
});
*/

//add_g4
app.post('/uploadpdf', (req, res) =>{
    let sampleFile = req.files.sampleFile;
    sampleFile.mv('C:/Users/Inbar Naus/VisualCodeProjects/Final_Project/Server' +sampleFile.name, function(err) {
        if (err)
          return res.status(500).send(err);
        res.send('File uploaded!');
    });
});

app.post('/addg4', async (req, res) => {
    if(req.files){
        res.send(await system.add_4g(req.files.g4));
    }
    else(res.send("bad file"));
});

//add_scanning
app.post('/uploadscanning', async (req, res) => {
    block = undefined; building = undefined; apartment = undefined; scan = undefined;
    if(req.files && (scan = req.files.scan) && (block = req.body.block) && 
        (building = req.body.building) && (apartment = req.body.apartment)){
        console.log(block);
        res.send(await system.add_scanning(block, building, apartment, scan));
    }
    else(res.send("bad something"));
})

//get apartment
app.get('/apartments/:block?/:building?/:apartment?', async (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if (block) {
        // filteredProperties = (system.get_buildings(block));
        if (building) {
            // filteredProperties = system.get_apartments(block, building);
            if (apartment) {
                filteredProperties = await system.get_apartment(block, building, apartment);
                res.send(filteredProperties);
            }
        }
    }
    res.send({succeed: false, res: "מלא את כל הפרטים"});
});

//get purchase
app.get('/editGet/:block/:building/:apartment', async (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if(block && building && apartment){
        filteredProperties = await system.get_purchase(block, building, apartment);
        res.send(filteredProperties);
    }
    res.send({succeed: false, res: "מלא את כל הפרטים"});
});

//set_purchase
app.post('/edit/:block/:building/:apartment', async (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    // console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if(block && building && apartment){
        filteredProperties = await system.set_purchase(block, building, apartment, req.body);
        res.send(filteredProperties);
    }
    res.send({succeed: false, res: "מלא את כל הפרטים"});
});

//login
app.post('/login', async (req, res) => {
    let user_info = req.body;
    login = await system.check_user_info(user_info['username'], user_info['password']);
    res.send(login);
});

//Return: rendom password
app.post('/register/lawyer', async (req,res) => {
    let user_info = req.body;
    // console.log(user_info);
    if(user_info && user_info['username'] && user_info['email']) {
        reg = await system.register_new_lawyer(user_info['username'], user_info['email'])
        res.send(reg);
    }
    res.send({succeed:false, res:"הכנס את כל הפרטים"});
});

app.post('/register/costumer', async (req,res) => {
    let user_info = req.body;
    // console.log(user_info);
    if(user_info && user_info['username'] && user_info['email']) {
        res.send(await system.register_new_costumer(user_info['username'], user_info['email']));
    }
    res.send({succeed:false, res:"הכנס את כל הפרטים"});
});

//get all unreported purchases
app.get('/unreported', async (req, res) => {
    res.send(await system.get_all_unreported_purchases());
});

//forgot pass
app.post('/login/forgotpass', async (req, res) => {
    body = req.body;
    email = body['email'];
    res.send(await system.confirm_pass(email));
});

//send report (temp)
app.post('/send_report', async (req, res) => {
    block = req.body.block;
    building = req.body.building;
    apartment = req.body.apartment;
    file = req.files.report;
    res.send(await system.send_report(block, building, apartment, file));
});

app.listen(app.get('port'), () => console.log(`Example app listening on port ${port}!`));