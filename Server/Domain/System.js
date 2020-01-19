const dal = require('../Stubs/Dal_Stub');

const functions = {

    add_4g : (file) => { dal.add_4g(file); },

    get_apartment : (block, building, apartment) => { dal.get_apartment(block, building, apartment); },

    get_apartments : (block, building) => { dal.get_apartments(block, building); },

    get_buildings : (block) => { dal.get_buildings(block); },

    add_purchase : (apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null, second_buyer_id = null) => {
        dal.get_purchase(apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name, second_buyer_id);
    },

    get_purchase : (block_num, building_num, apartment_num) => { dal.get_purchase(block_num, building_num, apartment_num); },

    set_purchase : (block_num, building_num, apartment_num, new_purchase_features) =>{ dal.set_purchase(block_num, building_num, apartment_num, new_purchase_features); },

    get_report : (block_num, building_num, apartment_num) => { dal.get_report(block_num, building_num, apartment_num); },

    get_all_unreported_purchases : () => { dal.get_all_unreported_purchases(); },

    register_new_costumer : (username, password, mail) => { dal.register_new_costumer(username, password, mail); },

    register_new_lawyer : (username, password, mail) => { dal.register_new_lawyer(username, password, mail); },

    get_user : (username) => { dal.get_user(username) },

    login : (username, password) => { dal.login(username, password); },

    extract_files_for_purchases : (files_list) => { dal/extract_files_for_purchases(files_list); },

    send_report : (apartment) => { dal.send_report(apartment); }
}
