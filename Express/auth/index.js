let express = require('express')
let app = express()
let mongoose = require('mongoose')
let dbConnect = require('./dbConnect')
let bodyParser = require('body-parser')
let cors = require('cors')

dbConnect;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
//model for project
let usersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    pswd: String
})


app.get("/", (req, res) => {
    try {
        res.status(200).json({ message: "Hi Im Default Path" })
    } catch {
        res.status(400).json({ message: " Path Not Found" })
    }
})

app.post('/users', async (req, res) => {
    try {
        let { name, age, email, pswd } = req.body

        let user = userModel({
            name: name,
            age: age,
            email: email,
            pswd: pswd
        })
        await user.save()
        res.status(200).json({ status: true, message: "User Created" })
    } catch (err) {
        res.status(200).json({ status: false, message: "User Not Created" })
    }

})



let port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) {
        console.log("Server Stop....")
    } else {
        console.log(`Sever Running on port:${port}`)
    }
})