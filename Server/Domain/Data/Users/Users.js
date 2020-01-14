class User {
    login = function(username, password){};

    is_lawyer = function(){};
}

class Costumer extends User{
    login = function(username, password){};

    is_lawyer = function(){};
}
class Lawyer extends User {
    login(self, username, password) {};

    register_costumer(self, username, password, is_lawyer){};

    register_lawyer(self, username, password, is_lawyer){};

    is_lawyer(username){};
}
