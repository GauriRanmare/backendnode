let express=require('express')
let app=express();
//middleware to log request info(but not send a response)
app.use((req,res,next)=>{
    console.log(`URL: ${req.url},Method:${req.method}`);
    next();
})
//Default route
app.get('/',(req,res)=>{
    res.send('welcome to the home page');
});

//Name route
app.get('/user',(req,res)=>{
    res.json({msg:'GET /user route'});
});
//Name route with POST method
app.post('/user',(req,res)=>{
    res.json({msg:'POST /user route'});
});
//Parameter route
app.get('/parameter/:name',(req,res)=>{
    res.json({msg:'Hello,${req.params.name}'});
});

//Query route
app.get('/queryRout',(req,res)=>{
    res.json({name:req.query.name,age:req.query.age});
});

//wildcard 404 route
app.use(/.*/,(req,res)=>{
    res.status(404).send('404 not found');
});

app.listen(5400, err => {
    if (err) {
        console.log('Server failed to start',err)
    } else {
        console.log('Server runnuing')
    }
})