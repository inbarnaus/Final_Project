const system = require("../../Server/Domain/System");

//get apartment
test('get an existing apartment', ()=>{
    let apartment = system.get_apartment("1", "1", "1");
    expect(apartment["price"]).toBe("12");
});

test('get an non-existing apartment', ()=>{
    let apartment = system.get_apartment("2", "2", "2");
    expect(apartment).toBe(undefined);
});

//add g4
test('add g4', ()=>{
    let apartment = system.get_apartment("1", "112", "2");
    expect(apartment).toBe(undefined);
    expect(system.add_4g("file")).toBe(true);
    let apartment = system.get_apartment("1", "112", "2");
    expect(apartment["garage"]).toBe("5");
});

//get purchase
test('get an existing apartment', ()=>{
    let apartment = system.get_purchase("1", "1", "1");
    expect(apartment["price"]).toBe("12");
});

test('get an non-existing apartment', ()=>{
    let apartment = system.get_apartment("0", "0", "0");
    expect(apartment).toBe(undefined);
});

//add purchase
test('add an non-existing purchase for an existing apartment', ()=>{
    let apartment = system.get_purchase("0", "0", "0");
    
    let apartment = system.add_purchase(
        {
            block: "0",
            building: "0",
            apartment: "0"
        },
        "avabash",
        "1");
    
    let apartment = system.get_purchase("0", "0", "0");
    expect(apartment["apartment_idx"]["block"]).toBe("0");
});

test('add an non-existing purchase for a non existing apartment', ()=>{
    let apartment = system.get_apartment("2", "2", "2");
    let purchase = system.get_purchase("2", "2", "2");
    expect(apartment).toBe(undefined);
    expect(purchase).toBe(undefined);
    
    let new_apartment = system.add_purchase(
        {
            block: "2",
            building: "2",
            apartment: "2"
        },
        "avabash",
        "1");
    expect(new_apartment).toBe(undefined);
});

test('add an existing purchase', ()=>{
    let apartment = system.get_apartment("1", "1", "1");
    expect(apartment["apartment_idx"]["block"]).toBe("0");
    let apartment = system.add_purchase(
        {
            block: "1",
            building: "1",
            apartment: "1"
        },
        "avabash",
        "1");
    expect(apartment).toBe(undefined);
});

//set apartment
test('set an existing purchase', ()=>{
    let purchase = system.get_purchase("1", "1", "1");
    expect(purchase["price"]).toBe("12");
    system.set_purchase(
        {
            block: "1",
            building: "1",
            apartment: "1"
        },
        {
            price: "13"
        }
        );
    purchase = system.get_purchase("1", "1", "1");
    expect(purchase["price"]).toBe("13");
});

test('set a non-existing purchase', ()=>{
    let purchase = system.get_purchase("-", "-", "-");
    expect(purchase).toBe(undefined);
    let setter = system.set_purchase(
        {
            block: "1",
            building: "1",
            apartment: "1"
        },
        {
            price: "13"
        }
        );
    expect(setter).toBe(undefined);
});
