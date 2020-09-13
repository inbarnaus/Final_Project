const path = require('path');
const system = require('./Server/Domain/System');
const express = require('express');

// const file_address = 'C:/Users/itays/OneDrive/Desktop/final_project/Final_Project'
const file_address = '/app'
//token validations
const auth = require('./Server/Communication/middleware/auth');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
const { check, validationResult } = require('express-validator');

const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const { report } = require('process');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const { response } = require('express');
app.use(fileUpload());

app.set('port', process.env.PORT || port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

console.log(process.env.PORT);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('Client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
    })
}

app.post('/login',
    async (req, res) => {
        if(!req.body['email'] || !req.body['password'])
            return res.send({succeed: false, res: "אנא הכנס אימייל וסיסמא"});
        console.log(req.body);
        const { email, password } = req.body;
        let login = await system.login(email, password);
        res.send(login);
    });

app.post('/register', async (req,res) => {
    let type = req.body.type;
    let email = req.body.email;
    let response = (type) ? await system.register_new_lawyer(email) : await system.register_new_costumer(email);
    res.send(response);
});

app.post('/addrepo', async (req,res) => {
    const block = req.body.block;
    const building = req.body.building;
    const apartment = req.body.apartment;
    // console.log(req.body);
    if (block && building && block) 
    {
        let filteredProperties = await system.get_purchase(block, building, apartment);
        console.log(filteredProperties);
        if(filteredProperties.succeed){
            return res.send(filteredProperties);
        }
        filteredProperties = await system.get_apartment(block, building, apartment);
        console.log(filteredProperties);
        return res.send(filteredProperties);
    }
    res.send({
        succeed: false,
        res: "אנא מלא את כל הפרטים"
    });
});

// app.get('/editrepo', (req,res) => {
//     res.json(filteredProperties);
// })

app.get('/reports', async (req,res) => {
    console.log(req);
    console.log("!!!!");
    let reports = await system.get_all_unreported_purchases();
    console.log(reports);
    res.send(reports);
});


app.post('/uploadpdf', async (req, res) =>{
    let sampleFile = req.files.file;
    await sampleFile.mv(file_address + '/Server/FileHandlers/files/' +sampleFile.name, async function(err) {
        if (err)
          return res.status(500).send(err);
        let response = await system.upload_pdf(req.body.block, req.body.building, req.body.apartment, sampleFile);
        res.send(response);
    });
});


app.post('/addg4', 
// [
//     auth,
//     requiresAdmin
//  ],
    async (req, res) => {
        //check for errors
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            
            return res.status(400).json({ errors: errors.array() });
        }
        if(!req.files)
            return res.send({succeed: false, res: "אנא הכנס קובץ"});
        let sampleFile = req.files.file;
        console.log(sampleFile);
        await sampleFile.mv(file_address + '/Server/G4/' +sampleFile.name, async function(err) {
            if (err)
                res.status(500).send(err);
            let response = await system.add_4g(
                file_address + '/Server/G4/' +sampleFile.name);
            res.send(response);
        });
});

app.post('/replaceg4', 
// [
//     auth,
//     requiresAdmin
//  ],
    async (req, res) => {
        //check for errors
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            
            return res.status(400).json({ errors: errors.array() });
        }
        if(!req.files)
            return res.send({succeed: false, res: "אנא הכנס קובץ"});
        let sampleFile = req.files.file;
        console.log(sampleFile);
        await sampleFile.mv(file_address + '/Server/G4/' +sampleFile.name, async function(err) {
            if (err)
                res.status(500).send(err);
            let response = await system.replace_4g(
                file_address + '/Server/G4/' +sampleFile.name);
            res.send(response);
        });
});

app.post('/searchrepo', async (req, res) => {
    const block = req.body.block;
    const building = req.body.building;
    const apartment = req.body.apartment;
    filteredProperties={succeed:''}
    console.log('222')
    console.log(`block: ${block}, building: ${building}, apartment: ${apartment}`);
    
    if (block && building && block) 
    {
        let filteredProperties = await system.get_apartment(block, building, apartment);
        console.log(filteredProperties);
        res.send(filteredProperties);
        
    }
    else{
        res.send({succeed: false, res: "אנא מלא את כל פרטי הרשומה"})
    }
    
});

// app.get('/showsearch', (req, res) => {
//     res.json(filteredProperties);
// })

app.get('/showsearch', (req, res) => {
    res.json(filteredProperties);
})

//Return: rendom password
app.post('/register/lawyer',
    async (req,res) => {
        //check for errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user_info = req.body;
        // console.log(user_info);
        if(user_info && user_info['email']) {
            reg = await system.register_new_lawyer(user_info['email'])
            res.send(reg);
        }
        else{
            res.send({succeed:false, res:"הכנס את כל הפרטים"});
        }
    });

app.post('/register/costumer',
    async (req,res) => {
        //check for errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user_info = req.body;
        // console.log(user_info);
        if(user_info && user_info['email']) {
            ans = await system.register_new_costumer(user_info['email']);
            res.send(ans);
        }
        else{
            res.send({succeed:false, res:"הכנס את כל הפרטים"});
        }
    });

app.post('/changePassword', async (req, res) => {
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let user_info = req.body
    if(user_info && user_info['email'] && user_info['password'] && user_info['new_password']) {
        ans = await system.change_password(user_info['email'], user_info['password'], user_info['new_password']);
        res.send(ans);
    }
    else{
        res.send({succeed:false, res:"הכנס את כל הפרטים"});
    }
});

//forgot pass
app.post('/login/forgotpass',async (req, res) => {
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    body = req.body;
    email = body['email'];
    ans = await system.confirm_pass(email);
    res.send(ans);
});

//get apartment
app.get('/apartments/:block?/:building?/:apartment?', async (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    // console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if (block) {
        // filteredProperties = (system.get_buildings(block));
        if (building) {
            // filteredProperties = system.get_apartments(block, building);
            if (apartment) {
                filteredProperties = await system.get_apartment(block, building, apartment);
                return res.send(filteredProperties);
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
    // console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if(block && building && apartment){
        filteredProperties = await system.get_purchase(block, building, apartment);
        res.send(filteredProperties);
    }
    else{
        res.send({succeed: false, res: "מלא את כל הפרטים"});
    }
});

app.post('/addPurchase', async (req, res) => {
    const block = req.body.blockNum;
    const building = req.body.buildNum;
    const apartment = req.body.apartNum;
    let filteredProperties;
    // console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);
    let reqbody = (name) => {return req.body[name];};
    if(block && building && apartment){
        filteredProperties = await system.add_purchase({block: block, building: building, apartment: apartment}, 
            reqbody("buyerName1"), reqbody("buyerId1"), reqbody("buyerName2"),
             reqbody("buyerId2"), reqbody("roomNum"), reqbody("apartArea"), reqbody("apartAreaAq"),
              reqbody("balconyArea"), reqbody("warehouseArea"), reqbody("warehouseNum"), reqbody("parkingNum"), 
              reqbody("parking1"), reqbody("parking2"), reqbody("purchaseDate"), reqbody("reportDate"), 
              reqbody("price"), reqbody("apartTenantPrice"), reqbody("notes"), reqbody("apartMMDPrice"), 
              reqbody("assessmentNum"), reqbody("referenceNum"), reqbody("mortgageSum"), reqbody("mortageBank"),
               reqbody("firstApartment"));
        
        res.send(filteredProperties);
    }
    else{
        res.send({
            succeed: false,
            res: "אנא מלא את כל הפרטים"
        });
    }
});

//set_purchase
app.post('/edit/:block/:building/:apartment', async (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if(block && building && apartment){
        filteredProperties = await system.set_purchase(block, building, apartment, req.body);
        res.send(filteredProperties);
    }
    else{
        res.send({succeed: false, res: "מלא את כל הפרטים"});
    }
});

app.post('/addscanning',
//  [
//     auth,
//     check('block', 'Missing block No').not().isEmpty(),
//     check('building', 'Missing building No').not().isEmpty(),
//     check('apartment', 'Missing apartment No').not().isEmpty()
// ],
async (req, res) => {
    //check for errors
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    // console.log(req);
    if(!req.files)
            return res.send({succeed: false, res: "אנא הכנס קובץ"});
    let sampleFile = req.files.file;
    await sampleFile.mv(file_address + '/Server/FileHandlers/files/' +sampleFile.name, async function(err) {
        if (err)
          return res.status(500).send(err);
        let response = await system.add_scanning(req.body.block, req.body.building, req.body.apartment, 
            file_address + '/Server/FileHandlers/files/' +sampleFile.name);
        res.send(response);
        
    });
});

//send report (temp)
app.post('/send_report', async (req, res) => {
    block = req.body.block;
    building = req.body.building;
    apartment = req.body.apartment;
    assesment = req.body.assesment;
    reference = req.body.reference;
    report_attr = {
        assesment: assesment,
        reference: reference
    };
    // file = req.files.report;
    ans = await system.send_report(block, building, apartment, report_attr);
    res.send(ans);
});


app.post('/test', async(req, res) => {
    console.log('avabash');
    res.send({avabash: "avabash"});
});

app.listen(app.get('port'), () => {console.log(`Example app listening on port ${port}!`)});

