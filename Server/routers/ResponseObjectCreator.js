class ResponseObjectCreator{
    constructor(){}

    ResponseObject(success, value, message){
        return {'success:': success, 'value': value, 'message': message};
    }
}