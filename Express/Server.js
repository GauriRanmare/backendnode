//Exception handling means catching runtime errors so your program does not stop.

let express = require('express');
let app = express()
//application create
let users = [
    { id: 1, name: 'Sakhi', age: 40, city: 'Pune' },
    { id: 2, name: 'Abhijit', age: 40, city: 'Pune' },
    { id: 3, name: 'Shree', age: 40, city: 'Pune' },
    { id: 4, name: 'Om', age: 40, city: 'Pune' },
    { id: 5, name: 'Prathamesh', age: 40, city: 'Pune' },
];

app.use(express.json())
app.use(express.urlencoded())//path /all user x error all-user right

app.get('/all-users', (req, res) => {
    res.send(users)
})

app.post('/insert', (req, res) => {
    res.send(req.body);
})

app.get('/get-one-user/:id/:name', (req, res) => {
    //parameter id,name kaha endpoint mein
    // res.send(res.body)
    // res.send(req.body)
    let { id, name } = req.params
    res.send({ id, name });
})

// app.put('/all-user/:id/:name', (req, res) => {
//     let { id, name } = req.params
//     res.send({ id, name });
//     req.send(req.body)
// })


app.listen(5000, (err) => {
    if (err) {
        console.log('Server is Stop...')
    } else {
        console.log('Server is Running...')
    }
})