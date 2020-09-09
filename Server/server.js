const path = require('path');
const system = require('./Domain/System');
const express = require('express');
const cors = require('cors');

//token validations
const auth = require('./Communication/middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const { report } = require('process');
const app = express();
const port = process.env.PORT || 8080;

app.use(fileUpload());

app.set('port', process.env.PORT || port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
console.log(process.env.PORT);
/*var j = schedule.scheduleJob('00 00 08 1-12 0-7', function(){
  console.log('The answer to life, the universe, and everything!');
});
*/

function requiresAdmin(req, res, next) {
    if(req.user.isLawyer !== true) {
       res.status(401).end();
    } else {
       next();
    }
}

let filteredProperties = {succeed:''}; // for searchrepo, addrepo
let userLogin;

// app.get('/', (req,res) => {
//     console.log('inbar')
//     res.redirect('http://localhost:3000/reports')
// })
    
    let reports;
    app.get('/reports', async (req,res) => {
        res.json(reports);
    })
    
    app.post('/login',
    //  [
        //     check('email', 'please include a valid email').isEmail(),
        //     check('password', 'Password is required').not().isEmpty()
        // ],
        async (req, res) => {
            const { email, password } = req.body;
            let login = await system.login(email, password);
            userLogin = login;
            if(!login.succeed)
            res.redirect('http://localhost:3000/login');
            else{
                reports = await system.get_all_unreported_purchases();
                res.redirect('http://localhost:3000/reports');
            }


    //     //check for errors
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() });
    //     }

    //     const { email, password } = req.body;

    //     //See if users exists
    //     try {
            
    //         let login = await system.login(email, password);
    //         if(!login.succeed){
    //             return res.send(login);
    //         }
    //         /* TODO: MAYBE NEEDS BCRYPT COMPARE */
    //         // //match password with found user
    //         // const isMatch = await bcrypt.compare(password, user.password);
    //         // if (!isMatch) {
    //         //     return res.status(400).json({ errors: [{ param: 'password', msg: 'email or password are incorrect' }] });
    //         // }

    //         const payload = {
    //             user: login["res"]
    //         }

    //         jwt.sign(
    //             payload,
    //             config.get('jwtSecret'),
    //             { expiresIn: 360000 },
    //             (err, token) => {
    //                 if (err) throw err;
    //                 res.json({ succeed: true, res: token, userData: user });
    //             }
    //         )

    //     } catch (err) {
    //         console.log(err.message);
    //         res.status(500).send('Server error: ' + err);
    //     }
    });

app.get('/log',(req, res) => {
    res.json(userLogin);
})


app.post('/register', async (req,res) => {
    let type = req.body.type;
    let email = req.body.mail;
    if(type == 'lawyer'){
        console.log(await system.register_new_lawyer(email));
    }
    else
        await system.register_new_costumer(email);
    res.redirect('http://localhost:3000/reports');
})

app.post('/addrepo', async (req,res) => {
    const block = req.body.block;
    const building = req.body.building;
    const apartment = req.body.apartment;
    console.log(`block: ${block}, building: ${building}, apartment: ${apartment}`);
    
    if (block) 
        if (building) 
            if (apartment) {
                filteredProperties = await system.get_apartment(block, building, apartment);
                console.log(filteredProperties)
                if(filteredProperties.succeed)
                    res.redirect('http://localhost:3000/editrepo');
                else{
                    res.redirect('http://localhost:3000/addrepo');
                }
            }
})

app.get('/editrepo', (req,res) => {
    res.json(filteredProperties);
})

app.post('/uploadpdf', (req, res) =>{
    let sampleFile = req.files.sampleFile;
    sampleFile.mv('C:/Users/Inbar Naus/VisualCodeProjects/Final_Project/Server/PDF_files/' +sampleFile.name, function(err) {
        if (err)
          return res.status(500).send(err);
        // system.upload_pdf(req.body.block, req.body.building, req.body.apartment, 
        //     'C:/Users/Inbar Naus/VisualCodeProjects/Final_Project/Server/PDF_files/' +sampleFile.name); 
    });
    res.redirect('http://localhost:3000/reports');
});


app.post('/addg4', 
// [
//     auth,
//     requiresAdmin
//  ],
 (req, res) => {
    //check for errors
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        
        return res.status(400).json({ errors: errors.array() });
    }

    let sampleFile = req.files.sampleFile;
    sampleFile.mv('C:/Users/Inbar Naus/VisualCodeProjects/Final_Project/Server/G4/' +sampleFile.name, function(err) {
        if (err)
          return res.status(500).send(err);
        system.add_4g('C:/Users/Inbar Naus/VisualCodeProjects/Final_Project/Server/G4/' +sampleFile.name);
    });

    res.redirect('http://localhost:3000/reports');
});

app.post('/searchrepo', async (req, res) => {
    const block = req.body.block;
    const building = req.body.building;
    const apartment = req.body.apartment;
    filteredProperties={succeed:''}
    console.log('222')
    console.log(`block: ${block}, building: ${building}, apartment: ${apartment}`);
    if (block){ 
        if (building) {
            if (apartment) {
                filteredProperties = await system.get_apartment(block, building, apartment);
                if(filteredProperties.succeed)
                    res.redirect('http://localhost:3000/showsearch');
                else{
                    filteredProperties = {succeed: false}
                    res.redirect('http://localhost:3000/searchrepo');
                }
            }
            else{
                filteredProperties = {succeed: false}
                res.redirect('http://localhost:3000/searchrepo');
            }
        }
        else{
            filteredProperties = {succeed: false}
            res.redirect('http://localhost:3000/searchrepo');
        }
    }
    else{
        filteredProperties = {succeed: false}
        res.redirect('http://localhost:3000/searchrepo');
    }
        // res.json({fail: 'פרטים לא נכונים/ פרטים חסרים'})
});

app.get('/searchreport', (req,res) => {
    // console.log('111')
    // filteredProperties={}
    // console.log(filteredProperties)
    res.json(filteredProperties)
})

app.get('/showsearch', (req, res) => {
    res.json(filteredProperties);
})

// app.get('/reports', (req, res) => {
//     res.json(filteredProperties);
// })

//Return: rendom password
app.post('/register/lawyer', [
    auth,
    requiresAdmin,
    check('email', 'Missing email').not().isEmpty()
],
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

app.post('/register/costumer', [
    auth,
    requiresAdmin,
    check('email', 'Missing email').not().isEmpty()
],
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

app.post('/changePassword', [
    auth,
    check('email', 'Missing email').not().isEmpty(),
    check('password', 'Missing old password').not().isEmpty(),
    check('new_password', 'Missing new password').not().isEmpty()
],async (req, res) => {
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
app.post('/login/forgotpass', [
    auth,
    check('email', 'Missing email').not().isEmpty()
],async (req, res) => {
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
    console.log("********************************")
    // console.log(req.body)
    const block = req.body.block;
    const building = req.body.build;
    const apartment = req.body.apart;
    let filteredProperties;
    // console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);
    let reqbody = (name) => {return req.body[name];};
    console.log(reqbody)
    if(block && building && apartment){
        filteredProperties = await system.add_purchase({block: block, building: building, apartment: apartment}, 
            reqbody("nameclient1"), reqbody("idclient1"), reqbody("nameclient2"),
             reqbody("idclient2"), reqbody("roomNum"), reqbody("apartArea"), reqbody("apartAreaAq"),
              reqbody("balconyArea"), reqbody("warehouseArea"), reqbody("warehouseNum"), reqbody("parkingNum"), 
              reqbody("parkingQuantity1"), reqbody("parkingQuantity2"), reqbody("purchaseDate"), reqbody("reportDate"), 
              reqbody("apartNumPrice"), reqbody("apartTenantPrice"), reqbody("notes"), reqbody("apartMMDPrice"), 
              reqbody("assessmentNum"), reqbody("referenceNum"), reqbody("mortgageSum"), reqbody("mortageBank"),
               reqbody("firstApartment"));
        // res.send(filteredProperties);
        res.redirect('http://localhost:3000/reports')
    }
    else{
        res.redirect('http://localhost:3000/editrepo')
    }
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
    else{
        res.send({succeed: false, res: "מלא את כל הפרטים"});
    }
});

app.post('/add_scanning',
//  [
//     auth,
//     check('block', 'Missing block No').not().isEmpty(),
//     check('building', 'Missing building No').not().isEmpty(),
//     check('apartment', 'Missing apartment No').not().isEmpty()
// ],
async (req, res) => {
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let sampleFile = req.files.sampleFile;
    console.log(sampleFile);
    sampleFile.mv('C:/Users/itays/OneDrive/Desktop/school/Final_Project/Final_Project/Server/FileHandlers/files/' +sampleFile.name, function(err) {
        if (err)
          return res.status(500).send(err);
        system.add_scanning(req.body.block, req.body.building, req.body.apartment, 
            'C:/Users/itays/OneDrive/Desktop/school/Final_Project/Final_Project/Server/FileHandlers/files/' +sampleFile.name); 
    });
});

//send report (temp)
app.post('/send_report', async (req, res) => {
    block = req.body.block;
    building = req.body.building;
    apartment = req.body.apartment;
    file = req.files.report;
    ans = await system.send_report(block, building, apartment, file);
    res.send(ans);
});


app.post('/test', async(req, res) => {
    console.log('avabash');
    res.send({avabash: "avabash"});
});

app.listen(app.get('port'), () => console.log(`Example app listening on port ${port}!`));
