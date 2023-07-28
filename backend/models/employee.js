const mongoose = require('mongoose');
const Employee = mongoose.model('Employee',{
    uname:String,
    email:String,
});
module.exports = Employee;