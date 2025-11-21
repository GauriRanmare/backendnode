

let http = require('http')

let users = [
    {
        "id": 1,
        "name": "Gauri",
        "age": 20
    },
       {
        "id": 2,
        "name": "Sakshi",
        "age": 20
    },
      {
        "id": 3,
        "name": "Nikita",
        "age": 21
    }
]


http.createServer((req,res)=>{
    let url= req.url
    if(url=="/users" && req.method==="GET"){//url tells which route the browser is requesting.
        res.write(JSON.stringify(users))
        res.end()
    } else if(url.startsWith("/users/")){
        console.log(req)
        res.end()
    }
}).listen(5000)

