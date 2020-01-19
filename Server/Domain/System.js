const dal = require('../Stubs/Dal_Stub');

const System = {

    add_4g : (file) => { return dal.add_4g(file); },

    get_apartment : (block, building, apartment) => { return dal.get_apartment(block, building, apartment); },

    get_apartments : (block, building) => { return dal.get_apartments(block, building); },

    get_buildings : (block) => { return dal.get_buildings(block); },

    add_purchase : (apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null, second_buyer_id = null) => {
        return dal.get_purchase(apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name, second_buyer_id);
    },

    get_purchase : (block_num, building_num, apartment_num) => { return dal.get_purchase(block_num, building_num, apartment_num); },

    set_purchase : (block_num, building_num, apartment_num, new_purchase_features) =>{ return dal.set_purchase(block_num, building_num, apartment_num, new_purchase_features); },

    get_report : (block_num, building_num, apartment_num) => { return dal.get_report(block_num, building_num, apartment_num); },

    get_all_unreported_purchases : () => { return dal.get_all_unreported_purchases(); },

    register_new_costumer : (username, password, mail) => { return dal.register_new_costumer(username, password, mail); },

    register_new_lawyer : (username, password, mail) => { return dal.register_new_lawyer(username, password, mail); },

    get_user : (username) => { return dal.get_user(username) },

    login : (username, password) => { dal.login(username, password); },

    extract_files_for_purchases : (files_list) => { return dal.extract_files_for_purchases(files_list); },

    send_report : (apartment) => { return dal.send_report(apartment); },

    get_all_registrated_users : () => { return dal.get_all_registrated_users(); },

    check_user_info : (username, password) => { return dal.check_user_info(username, password); },

    change_password : (username, password, new_pass) => { return dal.change_password(username, password, new_pass);}
}

module.exports = System;
