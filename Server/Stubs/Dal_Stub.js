const stub_data = require('./Data_Stub');

class Dal_stub {

    constructor(){}

    add_4g (file) {
        return true;
    };

    get_appartement (block, building, appartement){
        if(!block || ! building || ! appartement)
            throw ErrorEvent;
        for(let prop in properties){
            if((prop['block'] && prop['block'] === block) && prop['buliding'] === building && prop['appartement'] === appartement)
                return prop;
        }
    };

    get_appartements (block, building) {
        if(!block || ! building)
            throw ErrorEvent;
        let ret = [];
        for(let prop in properties){
            if((prob.block && prop.block === block) && prop.buliding === building)
                ret.push(prop);
        }
        return ret;
    };

    get_buildings (block) {
        if(!block)
            throw ErrorEvent;
        let ret = [];
        for(let prop in properties){
            if(prob.block && prop.block === block)
                ret.push(prop);
        }
        return ret;
    };

    add_purchase (appartement_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null,
                            second_buyer_id = null, date){
        for(var purch in purchases){
            if(appartement_purchase === purch["apartment_idx"])
                return null;
        }
        let original_apartment = get_apartment(appartement_purchase['block'],
            appartement_purchase['building'], appartement_purchase['apartment']);
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

    get_purchase (block_num, building_num, appartement_num){
        for(var purch in purchases){
            if(purch['block'] === block_num &&
                purch['building'] === building_num && purch['appartement'] === appartement_num){
                return purch;
            }
        }
        return null;
    };

    set_purchase (block_num, building_num, appartement_num, new_purchase_features){
        for(var purch in purchases){
            if(purch['block'] === block_num &&
                purch['building'] === building_num && purch['appartement'] === appartement_num){
                purch = new_purchase_features;
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

module.exports = Dal_stub