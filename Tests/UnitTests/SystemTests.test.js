const system = require("../../Server/Domain/System");
/*
test('get apartment test', () => {
    expect(system.get_apartment(1, 2, 1)).toStrictEqual({"block":1,"building":2,"apartment":1});
});*/

//Register && Login
test('check if after login- isLoggedIn: true', ()=>{
    let array = system.get_all_registrated_users();
    if(array.length > 0){
        expect(system.check_user_info(array[0]['username'], array[0]['password'])).toBe(true);
        expect(system.check_user_info(array[0]['username'], array[0]['password'].concat('113'))).toBe(false);
    }
});

//Change Password
test('check if password changed after changing it', ()=>{
    let array = system.get_all_registrated_users();
    if(array.length > 0){
        let old_pass = array[0]['password'];
        let new_pass = old_pass.concat('112');
        expect(system.change_password(array[0]['username'], old_pass, new_pass)).toBe(true);
        //expect(system.check_user_info(array[0]['username'], old_pass)).toBe(false);
    }
});

//Add 4G
test('check if add 4g succeded', () => {
    expect(system.add_4g("file")).toBe(true);
});

//Add Buyer
test('check if adding purchase succeded', () => {
    expect(system.add_purchase({block: 1, building: 1, apartment: 2}, 'inbar', 3122, "19/1/2020")).not.toBeNull();
});

test('check if edit record succeded', () => {
    let purchases = system.get_purchases();
    if(purchases.length > 0)
    expect(system.set_purchase(purchases[0]['apartment_idx'].block, purchases[0]['apartment_idx'].building, purchases[0]['apartment_idx'].apartment, purchases[0])).toBe(true);
    expect(system.set_purchase(50, purchases[0]['apartment_idx'].building, purchases[0]['apartment_idx'].apartment, purchases[0])).toBe(false);
});

