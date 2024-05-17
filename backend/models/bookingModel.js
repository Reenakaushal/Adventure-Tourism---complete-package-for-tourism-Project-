const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name : {type : String, require: true},
    place : {type : String, require: true},
    placeCover: String,
    price: Number,
    facilities: {type : Array, default: []},
    createdAt: {type : Date, default: Date.now}
});

module.exports = model('booking', mySchema);