const functions = {

    add_4g : (file) => {},

    get_apartment : (block, building, appartement) => {},

    get_apartments : (block, building) => {},

    get_buildings : (block) => {},

    add_purchase : (appartement_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null, second_buyer_id = null) => {},

    get_purchase : (block_num, building_num, appartement_num) => {},

    set_purchase : (block_num, building_num, appartement_num, new_purchase_features) =>{},

    get_report : (block_num, building_num, appartement_num) => {},

    get_all_unreported_purchases : () => {},

    register_new_costumer : (username, password, mail) => {},

    register_new_lawyer : (username, password, mail) => {},

    get_user : (username) => {},

    login : (username, password) => {},

    extract_files_for_purchases : (files_list) => {},

    send_report : (appartement) => {}
}
