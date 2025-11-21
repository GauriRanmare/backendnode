const express=require('express')
const app=express();
app.use(express.json())
app.use(express.urlencoded())

let users = [
    { id: 1, name: 'Sakhi', age: 40, city: 'Pune' },
    { id: 2, name: 'Abhijit', age: 40, city: 'Pune' },
    { id: 3, name: 'Shree', age: 40, city: 'Pune' },
    { id: 4, name: 'Om', age: 40, city: 'Pune' },
    { id: 5, name: 'Prathamesh', age: 40, city: 'Pune' },
];

app.get('/',(req,res)=>{
    res.send('hello')
})
app.post('/about', (req, res) => {
    res.send(req.body);
    console.log(req.body)
});
app.get('/users/:id',(req,res)=>{
    let {id}=req.params
    res.send({id})
})
app.listen(5000,()=>{
    console.log('server is running')
})