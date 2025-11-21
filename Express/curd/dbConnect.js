// let mongoose=require('mongoose')
// //mongosh 
// mongoose.connect(' mongodb://127.0.0.1:27017/curd'.trim())
// .then(res=>console.log("Mongoose Running..."))
// .catch(err=>console.log("Mongoose Stop...."))


let mongoose = require('mongoose');

let dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/employeeDB');
        console.log("MongoDB Connected");
    } catch (err) {
        console.log("DB Connection Failed", err);
    }
};

module.exports = dbConnect;
