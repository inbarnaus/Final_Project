Lawyers = [
    {password: "11", email: "aa@gmail.com"},
    {password: "11", email: "bb@gmail.com"},
    {password: "22", email: "cc@gmail.com"}
];

Costumers = [
    {password: "11", email: "aa1@gmail.com"},
    {password: "11", email: "bb1@gmail.com"},
    {password: "22", email: "cc1@gmail.com"}
];

properties = [
    {block: 1, building: 2, apartment: 1},
    {block: 1, building: 1, apartment: 1},
    {block: 1, building: 1, apartment: 2},
    {block: 4, building: 1, apartment: 1},
    {block: 5, building: 1, apartment: 1},
    {block: 6, building: 1, apartment: 1},
    {block: 7, building: 1, apartment: 1},
    {block: 9, building: 1, apartment: 1},
    {block: 10, building: 1, apartment: 1},
];


const buyer1 = {"id": 111, "name": "avabash"};
const buyer2 = {"id": 222, "name": "yosi"};

purchases = [
    {"apartment_idx": {block: 1, building: 2, apartment: 1}, "buyer1": buyer1, "buyer2": null,
        "parking1": 1, "parking2": 2, "garage_idx": 1, "purchase_date": "1/1/2020", "price": 12000,
        "assesment_number": 1, "reference": 1, "bank": "leumi", "comments": false, "scanning_form": null,
        "last_reporting_date": "29/1/2020", "was_reported": false},
    {"apartment_idx": {block: 1, building: 1, apartment: 1}, "buyer1": buyer2, "buyer2": null,
        "parking1": 3, "parking2": null, "garage_idx": 1, "purchase_date": "1/1/2020", "price": 12000,
        "assesment_number": 2, "reference": 2, "bank": "leumi", "comments": false, "scanning_form": null,
        "last_reporting_date": "29/1/2020", "was_reported": false}
];

module.exports = [purchases, properties]

