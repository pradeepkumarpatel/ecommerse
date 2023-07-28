const mongoose = require('mongoose');
const Product = mongoose.model('Product',{
    pname:String,
    pprice:Number,
    pcategory:String,
    pdescripton:String
});
module.exports = Product;