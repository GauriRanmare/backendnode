let express = require('express')
// let dbConnect = require('./dbConnect')
let students = require('./studentsSchema')
let cors = require('cors')
let app = express();

dbConnect;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post('/insert', async (req, res) => {
    let { firstName, lastName, email, phone, age } = req.body
    let data = students({
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        phone: phone
    })
    await data.save()
    res.status(200).json({ message: "Students Created..." })
})

app.get('/students', async (req, res) => {
    let studetsList = await students.find()
    res.status(200).json(studetsList)
})

app.delete('/students/:name', async (req, res) => {
    let name = req.params.name
    let studetsList = await students.deleteOne({ firstName: name })
    res.status(200).json({ message: "Delete Student..." })
})

app.put('/students/:name', async (req, res) => {
    let name = req.params.name
    let { firstName, lastName, email, phone, age } = req.body
    console.log(req.body)
    let studetsList = await students.deleteOne({ firstName: name },
        {
            $set: {
                firstName: firstName,
                lastName: lastName,
                age: age,
                email: email,
                phone: phone
            }
        }
    )
    console.log(studetsList)
    res.status(200).json({ message: "Update Student..." })
})
app.listen(5000, err => {
    if (err) {
        console.log('Server Stop...')
    } else {
        console.log('Server Running...')
    }
})