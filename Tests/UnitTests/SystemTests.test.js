const Dal_Stub = require("../../Server/Stubs/Dal_Stub");

test('get appartment test', () => {
    expect(Dal_Stub.get_apartment(1, 2, 1)).toStrictEqual({"block":1,"building":2,"apartment":1});
});