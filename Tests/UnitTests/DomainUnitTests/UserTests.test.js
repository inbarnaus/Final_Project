
const system = require("../../../Server/Domain/System");

// beforeEach(async ()=>{
//     console.log("before_S");
//     //set env
//     await system.register_new_lawyer("aa@gmail.com", "11");
//     await system.register_new_costumer("aa1@gmail.com", "11");
//     console.log("before_E");
// });

// afterEach(async () => {
//     console.log("after_S");
//     //clean env
//     await system.unregister("aa@gmail.com");
//     await system.unregister("aa1@gmail.com");
//     console.log("after_E");
// });


//get user
test('get an existing user', async ()=>{
    //set env
    await system.register_new_lawyer("aa@gmail.com", "11");
    await system.register_new_costumer("aa1@gmail.com", "11");
    //test
    let user = await system.get_user("aa@gmail.com");
    expect(user["res"]["password"]).toBe("11");
    //clean env
    await system.unregister("aa@gmail.com");
    await system.unregister("aa1@gmail.com");
});

test('get a non-existing user', async ()=>{
    //set env
    await system.register_new_lawyer("aa@gmail.com", "11");
    await system.register_new_costumer("aa1@gmail.com", "11");
    //test
    let user = await system.get_user("avabash@gmail.com");
    expect(user["succeed"]).toBe(false);
    //clean env
    await system.unregister("aa@gmail.com");
    await system.unregister("aa1@gmail.com");
});

//register new lawyer
test('register an existing lawyer', async ()=>{
    //set env
    await system.register_new_lawyer("aa@gmail.com", "11");
    await system.register_new_costumer("aa1@gmail.com", "11");
    //test
    let user = await system.register_new_lawyer("aa@gmail.com", "aa@gmail.com");
    expect(user["succeed"]).toBe(false);
    //clean env
    await system.unregister("aa@gmail.com");
    await system.unregister("aa1@gmail.com");
});

test('register a non existing lawyer', async ()=>{
    //set env
    await system.register_new_lawyer("aa@gmail.com", "11");
    await system.register_new_costumer("aa1@gmail.com", "11");
    //test
    let user1 = await system.register_new_lawyer("avabash@gmail.com", "avabash@gmail.com");
    expect(user1["succeed"]).toBe(true);
    // let user2 = await system.get_user("avabash@gmail.com");
    // // expect(user["res"]).toBe("avabash@gmail.com");//DELETE
    // expect(user2["res"]["password"]).toBe("avabash@gmail.com");
    await system.unregister("avabash@gmail.com");
    //clean env
    await system.unregister("aa@gmail.com");
    await system.unregister("aa1@gmail.com");
});

//register new costumer
test('register an existing costumer', async ()=>{
    //set env
    await system.register_new_lawyer("aa@gmail.com", "11");
    await system.register_new_costumer("aa1@gmail.com", "11");
    //test
    let user = await system.register_new_costumer("aa1@gmail.com", "aa1@gmail.com");
    expect(user["succeed"]).toBe(false);
    //clean env
    await system.unregister("aa@gmail.com");
    await system.unregister("aa1@gmail.com");
});

test('register a non existing lawyer', async ()=>{
    //set env
    await system.register_new_lawyer("aa@gmail.com", "11");
    await system.register_new_costumer("aa1@gmail.com", "11");
    //test
    let user = await system.register_new_costumer("avabash@gmail.com", "avabash@gmail.com");
    console.log(user);
    expect(user["succeed"]).toBe(true);
    // user = await system.get_user("avabash@gmail.com");
    // expect(user["res"]["password"]).toBe("avabash@gmail.com");
    await system.unregister("avabash@gmail.com");
    //clean env
    await system.unregister("aa@gmail.com");
    await system.unregister("aa1@gmail.com");
});

//change password
test('change password', async ()=>{
    //set env
    await system.register_new_lawyer("aa@gmail.com", "11");
    await system.register_new_costumer("aa1@gmail.com", "11");
    //test
    let user1 = await system.get_user("aa1@gmail.com");
    expect(user1["res"]["password"]).toBe("11");
    await system.change_password("aa1@gmail.com", "11", "new");
    let user2 = await system.get_user("aa1@gmail.com");
    expect(user2["res"]["password"]).toBe("new");
    //clean env
    await system.unregister("aa@gmail.com");
    await system.unregister("aa1@gmail.com");
});