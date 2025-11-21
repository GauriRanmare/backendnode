let express = require('express')
let bodyParser = require('body-parser')
let jwt = require('jsonwebtoken')
let cors = require('cors')
let app = express()
require('dotenv').config()

let port = process.env.PORT || 3000
let securityKey = process.env.SECURITY_KEY

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/auth', (req, res) => {
    let user = {
        id: 1,
        name: "Gauri",
        role: "Admin",
        phone: 1234567890
    }
    let token = jwt.sign(
        { role: user.role, id: user.id },
        securityKey,
        { expiresIn: "5s" }
    )
    res.send({ token: token })
})

app.post('/verify', (req, res) => {
    let token = req.body.token;   // important!
    if (!token) {
        return res.status(400).send({ error: "Token missing" });
    }

    try {
        let decoded = jwt.verify(token, securityKey);
        res.send({ tokenData: decoded });
    } catch (err) {
        res.status(401).send({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server Running on PORT : ${port}`)
})