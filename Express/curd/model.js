
let mongoose = require('mongoose');
//npm i express cors mongoose 

let employeeSchema = new mongoose.Schema({
    fName: {
        type: String
    },
    lName: {
        type: String
    },
    age: {
        type: Number
    },
    phone: {
        type: Number
    },
    city: {
        type: String
    }
}, { timestamps: true });

let employeeModel = mongoose.model('Employee', employeeSchema);

module.exports = employeeModel;






