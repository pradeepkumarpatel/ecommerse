const mongoose = require('mongoose');
const Seller = mongoose.model('Seller',{
    name:String,
    password:String,
    email:String,
});
module.exports = Seller;