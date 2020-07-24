const dal = require('../DataAccess/mongoose');

const pdf_scanner = require('../FileHandlers/Pdf_Scanner.js').parse_pdf;
const xl_scanner = require('../FileHandlers/Excel_Scanner').parse_xl;
const email_sender = require('./Mail/MailHandler');

const System = {
    gen_succ_res : (data) => {
        return {
            "succeed": true,
            "res": data
        }
    },

    gen_fail_res : (data) => {
        return {
            "succeed": true,
            "res": data
        }
    },

    add_4g : async (file) => {
        file_rows = await xl_scanner(file);
        console.log(file_rows);
        return await dal.add_g4(file_rows, file);
    },

    get_apartment : async (block, building, apartment) => { 
        ans = await dal.get_apartment(block, building, apartment); 
        return ans;
    },

    // get_apartments : (block, building) => { return dal.get_apartments(block, building); },

    // get_buildings : (block) => { return dal.get_buildings(block); },

    add_purchase : async (apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null, second_buyer_id = null, roomNum = null, apartArea = null, apartAreaAq = null, balconyArea = null, warehouseArea = null, warehouseNum = null, parkingNum = null, parkingQuantity1 = null, parkingQuantity2=null, purchaseDate, reportDate, apartNumPrice = null, apartTenantPrice = null, notes=null, apartMMDprice = null, dir = null, assessmentNum= null, referenceNum= null, mortgageSum= null, mortageBank= null, firstApartment= null) => {
        return await dal.add_purchase(apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name, second_buyer_id, prchase_attr = {
            roomNum: roomNum,
            apartArea: apartArea, 
            apartAreaAq: apartAreaAq, 
            balconyArea: balconyArea, 
            warehouseArea: warehouseArea, 
            garage: warehouseNum, 
            parkingNum: parkingNum, 
            parkingQuantity1: parkingQuantity1, 
            parkingQuantity2: parkingQuantity2, 
            apartNumPrice: apartNumPrice, 
            apartTenantPrice: apartTenantPrice, 
            purchaseDate: purchaseDate,
            reportDate: reportDate,
            notes: notes, 
            apartMMDprice: apartMMDprice, 
            dir: dir,
            assessmentNum: assessmentNum,
            referenceNum: referenceNum,
            mortgageSum: mortgageSum,
            mortageBank: mortageBank,
            notes: String,
            firstApartment: firstApartment
        });
    },

    get_purchase : async (block_num, building_num, apartment_num) => { return await dal.get_purchase(block_num, building_num, apartment_num); },

    set_purchase : async (block_num, building_num, apartment_num, new_purchase_features) =>{ return await dal.set_purchase(block_num, building_num, apartment_num, new_purchase_features); },

    get_report : async (block_num, building_num, apartment_num) => { return await dal.get_report(block_num, building_num, apartment_num); },

    get_all_unreported_purchases : async () => { return await dal.get_all_unreported_purchases(); },

    register_new_costumer : async (mail) => { 
        let costumer = await dal.register_new_costumer(mail);
        if(costumer.succeed){
            email_sender.mail_registration(mail, costumer.res.password);
        }
        return costumer;
    },

    register_new_lawyer : async (mail) => { 
        let lawyer = await dal.register_new_lawyer(mail);
        if(lawyer.succeed){
            email_sender.mail_registration(mail, lawyer.res.password);
        }
        return lawyer;
     },

    get_user : async (mail) => { return await dal.get_user(mail); },

    // extract_files_for_purchases : async (files_list) => { return await dal.extract_files_for_purchases(files_list); },

    upload_pdf : async (block, building, apartment, file) => {
        let find_report_attr = (attr) => {return null;} //TODO
        let attr = pdf_scanner(file);
        console.log(attr);
        let report_stuff = find_report_attr(attr);
        // return await dal.send_report(block, building, apartment, report_stuff); 
    },

    send_report : async(block, building, apartment) => {
        //TODO
    },

    send_report : async(block, building, apartment) => {
        //TODO
    },

    // get_all_registrated_users : () => { return dal.get_all_registrated_users(); },

    login : async (username, password) => { return await dal.login(username, password); },

    change_password : async (username, password, new_pass) => { return await dal.change_password(username, password, new_pass); },

    add_scanning : async (block, building, apartment, file) => {
        return await dal.add_scanning(block, building, apartment, file);
    },

    confirm_pass : async (email) => {
        user = await dal.get_user(email);
        if(user['succeed']){
            email_sender.mail_confirmation(email, user['res']['password']);
        }
        return user;
    },

    /*** PRIVATE METHODS FOR TESTS:
     * 
     * 
     */

    unregister : async (email) => { 
        return await dal.unregister(email);
    },

    add_apartment : async (blockNum, buildNum, apartNum, level, roomNum, apartArea, apartAreaAq, balconyArea, warehouseArea, warehouseNum, parkingNum, parkingQuantity1, parkingQuantity2=null, apartNumPrice, apartTenantPrice, notes=null, apartMMDprice, dir) => {//private method for tests
            return await dal.add_apartment(blockNum, buildNum, apartNum, level, roomNum, apartArea, apartAreaAq, balconyArea, warehouseArea, 
                warehouseNum, parkingNum, parkingQuantity1, parkingQuantity2, apartNumPrice, apartTenantPrice, notes, apartMMDprice, dir);
    },

    remove_apartment : async (blockNum, buildNum, apartNum) => {
        return await dal.remove_apartment(blockNum, buildNum, apartNum);
    },

    remove_purchase : async (blockNum, buildNum, apartNum) => {
        return await dal.remove_purchase(blockNum, buildNum, apartNum);
    }
}
module.exports = System;
