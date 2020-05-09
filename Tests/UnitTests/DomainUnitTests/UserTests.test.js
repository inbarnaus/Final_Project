
const system = require("../../../Server/Domain/System");

beforeEach(async ()=>{
    console.log("before_S");
    await system.register_new_lawyer("aa@gmail.com", "11");
    await system.register_new_costumer("aa1@gmail.com", "11");
    console.log("before_E");
});

afterEach(async () => {
    console.log("after_S");
    await system.unregister("aa@gmail.com");
    await system.unregister("aa1@gmail.com");
    console.log("after_E");
});
//get user
test('get an existing user', async ()=>{
    let user = await system.get_user("aa@gmail.com");
    expect(user["res"]["password"]).toBe("11");
});

test('get a non-existing user', async ()=>{
    let user = await system.get_user("avabash@gmail.com");
    expect(user["succeed"]).toBe(false);
});

//register new lawyer
test('register an existing lawyer', async ()=>{
    let user = await system.register_new_lawyer("aa@gmail.com", "aa@gmail.com");
    expect(user["succeed"]).toBe(false);
});

test('register a non existing lawyer', async ()=>{
    let user = await system.register_new_lawyer("avabash@gmail.com", "avabash@gmail.com");
    expect(user["succeed"]).toBe(true);
    user = await system.get_user("avabash@gmail.com");
    expect(user["res"]["password"]).toBe("avabash@gmail.com");
    await system.unregister("avabash@gmail.com");
});

//register new costumer
test('register an existing costumer', async ()=>{
    let user = await system.register_new_costumer("aa1@gmail.com", "aa1@gmail.com");
    expect(user["succeed"]).toBe(false);
});

test('register a non existing lawyer', async ()=>{
    let user = await system.register_new_costumer("avabash@gmail.com", "avabash@gmail.com");
    expect(user["succeed"]).toBe(true);
    user = await system.get_user("avabash@gmail.com");
    expect(user["res"]["password"]).toBe("avabash@gmail.com");
    await system.unregister("avabash@gmail.com");
});

//change password
test('change password', async ()=>{
    let user1 = await system.get_user("aa1@gmail.com");
    expect(user1["res"]["password"]).toBe("11");
    await system.change_password("aa1@gmail.com", "11", "new");
    let user2 = await system.get_user("aa1@gmail.com");
    expect(user2["password"]).toBe("new");
});