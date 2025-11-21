let http = require('http');

let users = [
    { id: 1, name: 'Sakhi', age: 40, city: 'Pune' },
    { id: 2, name: 'Abhijit', age: 40, city: 'Pune' },
    { id: 3, name: 'Shree', age: 40, city: 'Pune' },
    { id: 4, name: 'Om', age: 40, city: 'Pune' },
    { id: 5, name: 'Prathamesh', age: 40, city: 'Pune' },
];

http.createServer((req, res) => {
    let { url, method } = req

    if (url == '/allUsers' && method == 'GET') {
        res.writeHead(200)
        res.end(JSON.stringify(users))
    } else if (url.includes('/user') && method == 'GET') {
        let userID = url.split('/').pop()
        let findUser = users.find(ele => ele.id == userID)
        if (findUser) {
            res.writeHead(200)
            res.end(JSON.stringify(findUser))
        } else {
            res.writeHead(404)
            res.end(JSON.stringify({ message: "User Not Found" }))
        }
    } else if (method == 'POST' && url.includes("/insert")) {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const newUser = JSON.parse(body);
            const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

            const userToAdd = { id: newId, ...newUser };
            users.push(userToAdd);

            res.writeHead(201);
            res.end(JSON.stringify({ message: 'User Inserted', users }));
        });
    }

}).listen(5000, (err) => {
    if (err) {
        console.log('Server Stop...')
    } else {
        console.log('Server Start...')
    }
})