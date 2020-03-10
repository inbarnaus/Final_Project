stub_data = require('./Data_Stub');
const password = require('secure-random-password');

class Dal_Stub{

    add_4g(file){
        return true;
    }

    check_user_info(username, password){
        for(let user in Lawyers)
            if(Lawyers[user]['username'] == username && Lawyers[user]['password'] == password)
                return true;
        return false;
    }

    change_password(username, password, new_password){
        for(let user in Lawyers)
            if(Lawyers[user]['username'] == username && Lawyers[user]['password'] == password){
                Lawyers[user]['password'] == new_password;
                return true;
            }    
        return false;
    }

    get_apartment(block, building, apartment){
        if(!block || ! building || ! apartment)
            throw ErrorEvent;
        for(let prop in properties){
            if (prop == 0)
                console.log(`block: ${properties[prop]['block'] == block}, building num: ${building}, buliding: ${properties[prop]['building']}, apartment: ${properties[prop]['apartment'] == apartment}`);
            if(properties[prop]['block'] && 
            properties[prop]['block'] == block && 
            properties[prop]['building'] == building && 
            properties[prop]['apartment'] == apartment){
                return properties[prop];
            }
        }
    }

    get_apartments(block, building){
        if(!block || ! building)
            throw ErrorEvent;
        let ret = [];
        for(let prop in properties){
            if((properties[prop]['block'] && properties[prop]['block'] == block) && properties[prop]['building'] == building)
                ret.push(properties[prop]);
        }
        return ret;
    }

    get_buildings(block){
        if(!block)
            throw ErrorEvent;
        let ret = [];
        for(let prop in properties){
            if(properties[prop]['block'] && 
            properties[prop]['block'] == block)
                ret.push(properties[prop]);
        }
        return ret;
    }

    add_purchase(apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null, second_buyer_id = null, date){
        for(var purch in purchases){
            if(apartment_purchase == purch["apartment_idx"]){
                return null;
            }
        }
        let original_apartment = this.get_apartment(apartment_purchase['block'],
            apartment_purchase['building'], apartment_purchase['apartment']);
        let new_purch = {
            "apartment_idx": original_apartment, "buyer1": {"id": first_buyer_id, "name": first_buyer_name},
            "buyer2": (second_buyer_id == null? null: {"id": second_buyer_id, "name": second_buyer_name}),
            "parking1": original_apartment['parking1'], "parking2": original_apartment['parking2'],
            "garage_idx": original_apartment['garage'], "purchase_date": date, "price": original_apartment['price'],
            "assesment_number": null, "reference": null, "bank": null, "comments": false, "scanning_form": null,
            "last_reporting_date": date + 29, "was_reported": false
        };
        purchases.push(new_purch);
        return new_purch;
    }

    get_purchase(block_num, building_num, apartment_num){
        for(var purch in purchases){
            if(purchases[purch]['apartment_idx']['block'].toString() === block_num &&
            purchases[purch]['apartment_idx']['building'].toString() === building_num &&
             purchases[purch]['apartment_idx']['apartment'].toString() === apartment_num){
                return purchases[purch];
            }
        }
        return null;
    }

    set_purchase(block_num, building_num, apartment_num, new_purchase_features){
        for(var purch in purchases){
            if(purchases[purch]['apartment_idx'].block == block_num &&
            purchases[purch]['apartment_idx'].building == building_num && 
            purchases[purch]['apartment_idx'].apartment == apartment_num){
                purch = new_purchase_features;
                return true;
            }
        }
        return false;
    }

    get_all_unreported_purchases(){
        let ret = [];
        for(var purch in purchases){
            if(!purchases[purch]['was_reported'])
                ret.push(purchases[purch])
        }
        return ret;
    }

    register_new_costumer(username, password, mail){
        for(var cust in Costumers){
            if(username === cust['name'])
                return false;
        }
        Costumers.push({"name": username, "password": password, "email": mail})
        return true;
    }

    register_new_lawyer(username, password, mail){
        for(var cust in Lawyers){
            if(username === cust['name'])
                return false;
        }
        Lawyers.push({"name": username, "password": password, "email": mail})
        return true;
    }

    get_user(username){
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
    }

    extract_files_for_purchases(purchase){
        return null;
    }

    get_all_registrated_users(){
        return Lawyers;
    }

    get_purchases(){
        return purchases;
    }

    add_lawyer(username, email){
        for(let l in Lawyers)
            if(Lawyers[l].email == email)
                return false;
        let rand = password.randomPassword({length: 8});
        Lawyers.push({username: username, password: rand, email: email});
        return rand;
    }
}

module.exports = Dal_Stub;