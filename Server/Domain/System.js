class System{

    add_4g = function (file) {};

    get_appartement = function(block, building, appartement){};

    get_appartements = function (block, building) {

    };

    get_buildings = function (block) {

    };

    add_purchase = function(appartement_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null,
                 second_buyer_id = null){};

    get_purchase = function(block_num, building_num, appartement_num){};

    set_purchase = function(block_num, building_num, appartement_num, new_purchase_features){};

    get_report = function(block_num, building_num, appartement_num){};

    get_all_unreported_purchases = function(){};

    register_new_costumer = function(username, password, mail){};

    register_new_lawyer = function(username, password, mail){};

    get_user = function(username){};

    login = function(username, password){};

    extract_files_for_purchases = function(files_list){};

    send_report = function(appartement){};
}
