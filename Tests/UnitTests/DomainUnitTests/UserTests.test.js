const system = require("../../../Server/Domain/System");

//get user
test('get an existing user', ()=>{
    let user = system.get_user("aa@gmail.com");
    expect(user["password"]).toBe("11");
});

test('get a non-existing user', ()=>{
    let user = system.get_user("avabash@gmail.com");
    expect(user).toBe(undefined);
});

//register new lawyer
test('register an existing lawyer', ()=>{
    let user = system.register_new_lawyer("aa@gmail.com", "aa@gmail.com", "aa@gmail.com");
    expect(user).toBe(undefined);
});

test('register a non existing lawyer', ()=>{
    let user = system.register_new_lawyer("avabash@gmail.com", "avabash@gmail.com", "avabash@gmail.com");
    user = system.get_user("avabash@gmail.com");
    expect(user["password"]).toBe("avabash@gmail.com");
});

//register new costumer
test('register an existing costumer', ()=>{
    let user = system.register_new_costumer("aa1@gmail.com", "aa1@gmail.com", "aa1@gmail.com");
    expect(user).toBe(undefined);
});

test('register a non existing lawyer', ()=>{
    let user = system.register_new_costumer("avabash@gmail.com", "avabash@gmail.com", "avabash@gmail.com");
    user = system.get_user("avabash@gmail.com");
    expect(user["password"]).toBe("avabash@gmail.com");
});

//change password
test('change password', ()=>{
    let user = system.get_user("aa@gmail.com");
    expect(user["password"]).toBe("11");
    system.change_password("aa@gmail.com", "11", "new");
    let user = system.get_user("aa@gmail.com");
    expect(user["password"]).toBe("new");
});