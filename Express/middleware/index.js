// let express = require('express')
// let app = express();

// let isMiddleware = (req, res, next) => {
//     if (parseInt(req.params.id) < 20){
//         next()
// }else {
//     res.status(404).json({message:"Not Match"})
// }
// }
// // console.log(params)
// app.get('/users/:id', isMiddleware, (req, res) => {//route
//     // res.send('Hii im All Users Path')
//     res.send(req.params)
// })
// app.listen(5000, err => {
//     if (err) {
//         console.log('Server Stop')
//     } else {
//         console.log('Server Start..')
//     }
// })



let express = require('express')
let app = express();

let isMiddleware = (err,req, res, next) => {
    if (req.url.params.id == '') {
        res.json({ message: req.url})
        next()
    } else {
        res.json({ message: req.url })
        next()
    }
}
//global
// app.use(isMiddleware)
//Middleware only need answer its does not matter that the answer is correct or not 
//just do next (),next() in if else conditions

app.get('/users/:id', (req, res) => {
    res.send(req.params)
})


app.get('/students/:id', (req, res) => {
    res.send(req.params)
})

app.use(/.*/, (req, res) => {
    res.status(404).send('404 not found');
});

app.listen(5400, err => {
    if (err) {
        console.log('Server Stop')
    } else {
        console.log('Server Start..')
    }
})