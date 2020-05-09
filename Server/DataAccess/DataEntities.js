const mongoose = require('mongoose');

// const ObjectId = Schema.ObjectId;
const Schema = mongoose.Schema;

const User = mongoose.model('User', new Schema({
    email: String,
    password: String,
    isLawyer: Boolean
}));

const Asset = mongoose.model('Asset', new Schema({
    buildNum: Number, 
    fieldNum: Number, 
    apartNum: Number, 
    level: Number, 
    roomNum: Number, 
    apartArea: Number, 
    apartAreaAq: Object, 
    balconyArea: Number, 
    warehouseArea: Number, 
    warehouseNum: Number, 
    parkingNum: Number, 
    parkingQuantity1: Number, 
    parkingQuantity2: Object, 
    apartNumPrice: Number,
    apartTenantPrice: Number, 
    notes: Object, 
    apartMMDprice: Object, 
    dir: Object
}));

const Acquisition = mongoose.model('Acquisition', new Schema({
    buildNum: Number, 
    fieldNum: Number, 
    apartNum: Number, 
    buyerName1: String,
    buyerId1: String,
    buyerName2: {type: String, default: null},
    buyerId2: {type: String, default: null},
    parking1: Number,
    parking2: {type: Number, default: null},
    garage: Number,
    purchaseDate: Date,
    reportDate: Date,
    price: Number,
    assessmentNum: {type: Number, default: null},
    referenceNum: {type: Number, default: null},
    mortgageSum: Number,
    mortageBank: Number,
    notes: String,
    scanForm: {type: String, default: null}, //TODO
    firstApartment: {type: Boolean, default: true},
    reported: {type: Boolean, default: false},
}));