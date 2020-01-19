const Dal_Stub = require("../../Server/Stubs/Dal_Stub");
const App = require("../../Client/src/App");

test('get apartment test', () => {
    expect(Dal_Stub.get_apartment(1, 2, 1)).toStrictEqual({"block":1,"building":2,"apartment":1});
});

test('check if after login- isLoggedIn: true', ()=>{
    
});