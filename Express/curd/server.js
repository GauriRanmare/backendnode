let express = require('express')
let cors = require('cors')
let dbConnect = require('./dbConnect')
let employeModel = require('./model')

let app = express()

dbConnect();   // MUST call the function

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//-------------------------------------------------------------
// Create employee
app.post('/Add-employee', async (req, res) => {
    try {
        let data = new employeModel(req.body)
        await data.save()
        res.status(200).json({ status: true, data })
    } catch (err) {
        res.status(404).json({ status: false, message: "User not created", error: err.message })
    }
})


//-------------------------------------------------------------
// Get all employees
app.get('/Allemployee', async (req, res) => {
    try {
        let allData = await employeModel.find()
        res.status(200).json({ status: true, message: "OK", allData })
    } catch (err) {
        res.status(404).json({ status: false, message: "Can't Get Data.." })
    }
})


//-------------------------------------------------------------
// Delete employee by name
app.delete('/Del-employee/:name', async (req, res) => {
    try {
        let keyName = req.params.name
        await employeModel.deleteOne({ fName: keyName })
        res.status(200).json({ status: true, message: "Employee Deleted Successfully.." })
    } catch (err) {
        res.status(404).json({ status: false, message: "Can't Delete Data.." })
    }
})


//-------------------------------------------------------------
// Update employee by name
app.put('/Update-employee/:name', async (req, res) => {
    try {
        let keyName = req.params.name
        await employeModel.updateOne({ fName: keyName }, { $set: req.body })
        res.status(200).json({ status: true, message: "Employee Updated Successfully.." })
    } catch (err) {
        res.status(404).json({ status: false, message: "Can't Update Employee.." })
    }
})


//-------------------------------------------------------------
app.listen(5000, err => {
    if (err) {
        console.log("Server Stop..")
    } else {
        console.log('Server Started...')
    }
})
