const dal = require('../DataAccess/mongoose');

const pdf_scanner = require('../FileHandlers/Pdf_Scanner.js').parse_pdf;
// const xl_scanner = require('../FileHandlers/Excel_Scanner.js');
const xlsxFile = require('read-excel-file/node');
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
        reverseString = (arr) =>{
            for(var i=0; i< arr.length; i++){
                if(typeof arr[i] == 'string' && arr[i] != null){
                    var revArray = ""; 
                    const length = arr[i].length - 1; 
                    for(let j = length; j >= 0; j--) {
                        revArray += arr[i][j];
                    }
                    arr[i] = revArray;  
                }
            }
            return arr;
        };
        ans = null;
        await xlsxFile(file).then(async (rows) => {
            for (var i=0; i<rows.length; i++)
                rows[i] = reverseString(rows[i]);
            const length = rows.length - 1; 
            var flag;
            for(let j = length; j >= 0; j--) {
                if(typeof rows[j][0] != 'number'){
                    flag = j+1;
                    break;
                }
            }
            var tempRepo = rows.slice(flag, length+1);
            ans = await dal.add_g4(tempRepo);
            // return ans;
        }).catch((err) => {console.log(err)});
        return ans;
    },

    get_apartment : async (block, building, apartment) => { 
        ans = await dal.get_apartment(block, building, apartment); 
        return ans;
    },

    // get_apartments : (block, building) => { return dal.get_apartments(block, building); },

    // get_buildings : (block) => { return dal.get_buildings(block); },

    add_purchase : async (apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null, second_buyer_id = null) => {
        return await dal.add_purchase(apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name, second_buyer_id);
    },

    get_purchase : async (block_num, building_num, apartment_num) => { return await dal.get_purchase(block_num, building_num, apartment_num); },

    set_purchase : async (block_num, building_num, apartment_num, new_purchase_features) =>{ return await dal.set_purchase(block_num, building_num, apartment_num, new_purchase_features); },

    get_report : async (block_num, building_num, apartment_num) => { return await dal.get_report(block_num, building_num, apartment_num); },

    get_all_unreported_purchases : async () => { return await dal.get_all_unreported_purchases(); },

    register_new_costumer : async (mail, password) => { return await dal.register_new_costumer(mail, password); },

    register_new_lawyer : async (mail, password) => { return await dal.register_new_lawyer(mail, password); },

    get_user : async (mail) => { return await dal.get_user(mail); },

    login : async (mail, password) => { return await dal.login(mail, password); },

    extract_files_for_purchases : async (files_list) => { return await dal.extract_files_for_purchases(files_list); },

    send_report : async(block, building, apartment, file) => {
        report_stuff = find_report_attr(pdf_scanner(file));
        return await dal.send_report(block, building, apartment, report_stuff); 
    },

    // get_all_registrated_users : () => { return dal.get_all_registrated_users(); },

    check_user_info : async (username, password) => { return await dal.check_user_info(username, password); },

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

    add_apartment : async (fieldNum, buildNum, apartNum, level, roomNum, apartArea, apartAreaAq, balconyArea, warehouseArea, warehouseNum, parkingNum, parkingQuantity1, parkingQuantity2=null, apartNumPrice, apartTenantPrice, notes=null, apartMMDprice, dir) => {//private method for tests
            return await dal.add_apartment(fieldNum, buildNum, apartNum, level, roomNum, apartArea, apartAreaAq, balconyArea, warehouseArea, 
                warehouseNum, parkingNum, parkingQuantity1, parkingQuantity2, apartNumPrice, apartTenantPrice, notes, apartMMDprice, dir);
    },

    remove_apartment : async (fieldNum, buildNum, apartNum) => {
        return await dal.remove_apartment(fieldNum, buildNum, apartNum);
    }
}

module.exports = System;
