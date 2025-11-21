// npm i express body-parser cors dotenv
// npm i mongoose
//npm --watch index.js
let mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGOOSE_URL)

    .then(res => console.log('Mongoose Connect..'))
    .catch(err => console.log('Mongoose Connection Failed...'))