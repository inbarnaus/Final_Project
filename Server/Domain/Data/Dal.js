class Dal {
    add_4g = function (file) {
    };

    get_apartment = function (block, building, apartment) {
    };

    get_apartments = function (block, building) {

    };

    get_buildings = function (block) {

    };

    add_purchase = function (apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null,
                             second_buyer_id = null) {
    };

    get_purchase = function (block_num, building_num, apartment_num) {
    };

    set_purchase = function (block_num, building_num, apartment_num, new_purchase_features) {
    };

    get_report = function (block_num, building_num, apartment_num) {
    };

    get_all_unreported_purchases = function () {
    };

    register_new_costumer = function (username, password, mail) {
    };

    register_new_lawyer = function (username, password, mail) {
    };

    get_user = function (username) {
    };

    extract_files_for_purchases = function (files_list) {
    };
}

export default Dal;