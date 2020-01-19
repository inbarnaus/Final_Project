const Dal_Stub = require("../../Server/Stubs/Dal_Stub");
/*
test('get apartment test', () => {
    expect(Dal_Stub.get_apartment(1, 2, 1)).toStrictEqual({"block":1,"building":2,"apartment":1});
});*/

//Register && Login
test('check if after login- isLoggedIn: true', ()=>{
    expect(Dal_Stub.check_user_info("aa", "11").toBe(true));
    expect(Dal_Stub.check_user_info("aab", "1g1").toBe(false));
});

//Change Password
test('check if password changed after changing it', ()=>{
    Dal_Stub.change_password("aa", "11", "112");
    expect(Dal_Stub.check_user_info("aa", "112").toBe(true));
    expect(Dal_Stub.check_user_info("aa", "11").toBe(false));
});

//Add 4G
test('check if add 4g succeded', () => {
    expect(Dal_Stub.add_4g(file).toBe(true));
});

//Add Buyer
test('check if adding purchase succeded', () => {
    expect(Dal_Stub.add_purchase())
});

