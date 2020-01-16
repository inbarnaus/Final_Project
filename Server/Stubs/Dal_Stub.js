stub_data = require('./Data_Stub');

class Dal_stub {

    constructor(){}

    add_4g (file) {
        return true;
    };

    get_apartment (block, building, apartment){
        if(!block || ! building || ! apartment)
            throw ErrorEvent;
        for(let prop in properties){
            if((properties[prop]['block'] && properties[prop]['block'] === block) && properties[prop]['buliding'] === building && properties[prop]['apartment'] === apartment)
                return properties[prop];
        }
    };

    get_apartments (block, building) {
        if(!block || ! building)
            throw ErrorEvent;
        let ret = [];
        for(let prop in properties){
            if((properties[prob].block && properties[prop].block === block) && properties[prop].buliding === building)
                ret.push(properties[prop]);
        }
        return ret;
    };

    get_buildings (block) {
        if(!block)
            throw ErrorEvent;
        let ret = [];
        for(let prop in properties){
            if(properties[prop].block && properties[prop].block.toString() === block)
                ret.push(properties[prop]);
        }
        return ret;
    };

    add_purchase (apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null,
                            second_buyer_id = null, date){
        for(var purch in purchases){
            if(apartment_purchase === purch["apartment_idx"])
                return null;
        }
        let original_apartment = get_apartment(apartment_purchase['block'],
            apartment_purchase['building'], apartment_purchase['apartment']);
        let new_purch = {
            "apartement_idx": original_apartment, "buyer1": {"id": first_buyer_id, "name": first_buyer_name},
            "buyer2": (second_buyer_id == null? null: {"id": second_buyer_id, "name": second_buyer_name}),
            "parking1": original_apartment['parking1'], "parking2": original_apartment['parking2'],
            "garage_idx": original_apartment['garage'], "purchase_date": date, "price": original_apartment['price'],
            "assesment_number": null, "reference": null, "bank": null, "comments": false, "scanning_form": null,
            "last_reporting_date": date + 29, "was_reported": false
        };
        purchases.push(new_purch);
        return new_purch;
    };

    get_purchase (block_num, building_num, apartment_num){
        for(var purch in purchases){
            if(purchases[purch]['apartement_idx'].block == block_num &&
            purchases[purch]['apartement_idx'].building == building_num && 
            purchases[purch]['apartement_idx'].apartment == apartment_num){
                return purchases[purch];
            }
        }
        return null;
    };

    set_purchase (block_num, building_num, apartment_num, new_purchase_features){
        for(var purch in purchases){
            if(purchases[purch]['apartement_idx'].block === block_num &&
            purchases[purch]['apartement_idx'].building == building_num && 
            purchases[purch]['apartement_idx'].apartment == apartment_num){
                purchases[purch] = new_purchase_features;
                return true;
            }
        }
        return false;
    };

    get_all_unreported_purchases (){
        let ret = [];
        for(var purch in purchases){
            if(!purch['was_reported'])
                ret.push(purch)
        }
        return ret;
    };

    register_new_costumer (username, password, mail){
        for(var cust in Costumers){
            if(username === cust['name'])
                return false;
        }
        Costumers.push({"name": username, "password": password, "email": mail})
        return true;
    };

    register_new_lawyer (username, password, mail){
        for(var cust in Lawyers){
            if(username === cust['name'])
                return false;
        }
        Lawyers.push({"name": username, "password": password, "email": mail})
        return true;
    };

    get_user (username){
        let cust = Costumers.filter((customer) => costumer['name'] === username);
        if (cust.length === 1)
            return cust[0];
        if (cust.length === 0){
            let law = Lawyers.filter((lawyer) => lawyer['name'] === username);
            if(law.length === 1)
                return law[0];
            if(law.length === 0)
                return null;
        }
        throw ErrorEvent();
    };

    extract_files_for_purchases (purchase){
        return null;
    };
}

module.exports = Dal_stub;