let express=require('express')
let app=express()
const port=4000

app.get('/',(req,res)=>{
    console.log('Hello World!')
})

app.get('/about',(req,res)=>{
    console.log('about')
})
