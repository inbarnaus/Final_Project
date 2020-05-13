const system = require("../../../Server/Domain/System");

test('integration data test', async ()=>{
    ap1 = await system.add_apartment("1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1");
    expect(ap1["succeed"]).toBe(true);
    pu1 = await system.add_purchase("1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1");
    expect(pu1["succeed"]).toBe(true);
    await system.add_apartment("0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0");
    
    let apartment = await system.get_apartment("1", "1", "1");
    expect(apartment["res"]["price"]).toBe("1");

    apartment = await system.get_apartment("2", "2", "2");
    expect(apartment["succeed"]).toBe(false);
    
    let purchase = await system.get_purchase("1", "1", "1");
    expect(purchase["res"]["price"]).toBe("1");

    let apartment2 = await system.get_apartment("0", "0", "0");
    expect(apartment2["succeed"]).toBe(true);
    let purchase2 = await system.get_purchase("0", "0", "0");
    expect(purchase2["succeed"]).toBe(false);

    purchase2 = await system.add_purchase(
        {
            block: "0",
            building: "0",
            apartment: "0"
        },
        "avabash",
        "1");
    expect(purchase2["succeed"]).toBe(true);
    purchase2 = await system.get_purchase("0", "0", "0");
    expect(purchase2["succeed"]).toBe(false);
    expect(purchase2["res"]["buyerId1"]).toBe("1");

    let new_apartment = await system.add_purchase(
        {
            block: "2",
            building: "2",
            apartment: "2"
        },
        "avabash",
        "1");
    expect(new_apartment["succeed"]).toBe(false);

    new_purchase = await system.add_purchase(
        {
            block: "1",
            building: "1",
            apartment: "1"
        },
        "avabash",
        "1");
    expect(new_purchase["succeed"]).toBe(false);
    expect(purchase["res"]["price"]).toBe("1");
    let setter = await system.set_purchase("1", "1", "1",
        {
            price: "13"
        });
    expect(setter["succeed"]).toBe(true);
    purchase = await system.get_purchase("1", "1", "1");
    expect(purchase["res"]["price"]).toBe("13");

    purchase = await system.get_purchase("-", "-", "-");
    expect(purchase["succeed"]).toBe(false);
    purchase = await system.set_purchase("-", "-", "-",
        {
            price: "13"
        });
    expect(purchase["succeed"]).toBe(false);

    await system.remove_purchase("1", "1", "1");
    await system.remove_apartment("0", "0", "0");
    await system.remove_apartment("1", "1", "1");
});