
const system = require("../../../Server/DataAccess/mongoose");

//final test for mongoose
test('User integration test', async ()=> {
    console.log("final test starts:");
    let tmp1 = await system.get_user("l1");
    expect(tmp1["succeed"]).toBe(false);
    let lawyer1 = await system.register_new_lawyer("l1", "l1");
    expect(lawyer1["succeed"]).toBe(true);
    expect(lawyer1["res"]["password"]).toBe("l1");
    let change1 = await system.change_password("l", "l1", "newl1");
    expect(change1["succeed"]).toBe(false);
    let change2 = await system.change_password("l1", "l", "newl1");
    expect(change2["succeed"]).toBe(false);
    let change3 = await system.change_password("l1", "l1", "newl1");
    expect(change3["succeed"]).toBe(true);
    lawyer1 = await system.get_user("l1");
    expect(lawyer1["succeed"]).toBe(true);
    expect(lawyer1["res"]["password"]).toBe("newl1");
    let unreg = await system.unregister("l1");
    expect(unreg["succeed"]).toBe(true);
    let tmp2 = await system.get_user("l1");
    expect(tmp2["succeed"]).toBe(false);
});


// beforeEach(()=>{
//     console.log("before_S Data");
//     system.
//     console.log("before_E Data");
// });

// //get apartment
// test('get an existing apartment', ()=>{
//     let apartment = system.get_apartment("1", "1", "1");
//     expect(apartment["res"]["price"]).toBe("12");
// });

// test('get an non-existing apartment', ()=>{
//     let apartment = system.get_apartment("2", "2", "2");
//     expect(apartment["succeed"]).toBe(false);
// });

// //add g4
// test('add g4', ()=>{
//     let apartment = system.get_apartment("1", "112", "2");
//     expect(apartment["succeed"]).toBe(false);
//     expect(system.add_4g("file")["succeed"]).toBe(true);
//     let apartment = system.get_apartment("1", "112", "2");
//     expect(apartment["res"]["garage"]).toBe("5");
// });

// //get purchase
// test('get an existing apartment', ()=>{
//     let apartment = system.get_purchase("1", "1", "1");
//     expect(apartment["res"]["price"]).toBe("12");
// });

// test('get an non-existing apartment', ()=>{
//     let apartment = system.get_apartment("0", "0", "0");
//     expect(apartment["succeed"]).toBe(false);
// });

// //add purchase
// test('add an non-existing purchase for an existing apartment', ()=>{
//     let apartment = system.get_purchase("0", "0", "0");
//     expect(apartment["succeed"]).toBe(false);
//     apartment = system.add_purchase(
//         {
//             block: "0",
//             building: "0",
//             apartment: "0"
//         },
//         "avabash",
//         "1");
//     expect(apartment["succeed"]).toBe(true);
//     apartment = system.get_purchase("0", "0", "0");
//     expect(apartment["res"]["apartment_idx"]["block"]).toBe("0");
// });

// test('add an non-existing purchase for a non existing apartment', ()=>{
//     let apartment = system.get_apartment("2", "2", "2");
//     let purchase = system.get_purchase("2", "2", "2");
//     expect(apartment["succeed"]).toBe(false);
//     expect(purchase["succeed"]).toBe(false);
    
//     let new_apartment = system.add_purchase(
//         {
//             block: "2",
//             building: "2",
//             apartment: "2"
//         },
//         "avabash",
//         "1");
//     expect(new_apartment["succeed"]).toBe(false);
// });

// test('add an existing purchase', ()=>{
//     let apartment = system.get_purchase("1", "1", "1");
//     expect(apartment["succeed"]).toBe(false);
//     apartment = system.add_purchase(
//         {
//             block: "1",
//             building: "1",
//             apartment: "1"
//         },
//         "avabash",
//         "1");
//     expect(apartment["succeed"]).toBe(false);
// });

// //set apartment
// test('set an existing purchase', ()=>{
//     let purchase = system.get_purchase("1", "1", "1");
//     expect(purchase["res"]["price"]).toBe("12");
//     let setter = system.set_purchase("1", "1", "1",
//         {
//             price: "13"
//         });
//     expect(setter["succeed"]).toBe(true);
//     purchase = system.get_purchase("1", "1", "1");
//     expect(purchase["res"]["price"]).toBe("13");
// });

// test('set a non-existing purchase', ()=>{
//     let purchase = system.get_purchase("-", "-", "-");
//     expect(purchase["succeed"]).toBe(false);
//     purchase = system.set_purchase("-", "-", "-",
//         {
//             price: "13"
//         });
//     expect(purchase["succeed"]).toBe(false);
// });
