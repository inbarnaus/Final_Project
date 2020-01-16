dal = require('../Stubs/Dal_Stub');

class System{

    add_4g(file) {
        add_4g(file);
    }

    get_appartement(block, building, appartement){
        get_appartement(block, building, appartement);
    }

    get_appartements(block, building) {
        get_appartements(block, building);
    }

    get_buildings(block) {
        get_buildings(block);
    }

    add_purchase(appartement_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null,
                 second_buyer_id = null){
        add_purchase(appartement_purchase, first_buyer_name, first_buyer_id, second_buyer_name, second_buyer_id, date);
    }

    get_purchase(block_num, building_num, appartement_num){
        get_purchase(block_num, building_num, appartement_num);
    }

    set_purchase(block_num, building_num, appartement_num, new_purchase_features){
        set_purchase(block_num, building_num, appartement_num, new_purchase_features);
    }

    get_report(block_num, building_num, appartement_num){
        get_report(block_num, building_num, appartement_num);
    }

    get_all_unreported_purchases(){
        get_all_unreported_purchases();
    }

    register_new_costumer(username, password, mail){
        register_new_costumer(username, password, mail);
    }

    register_new_lawyer(username, password, mail){
        register_new_lawyer(username, password, mail);
    }

    get_user(username){
        get_user(username);
    }

    login(username, password){
        login(username, password);
    }

    extract_files_for_purchases(files_list){
        extract_files_for_purchases(files_list);
    }

    send_report(appartement){
        send_report(appartement);
    }
}
