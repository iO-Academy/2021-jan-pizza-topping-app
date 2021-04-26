const express =require('express');
const app = express();
const hostname = '127.0.0.1'
const port = 3001;
const server = app.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end()
})


server.listen(port, hostname, () => {
    console.log('server running at http://${hostname}:${port}')
    })

console.log('banana')

// app.get('/', function(request, response){
//     console.log('Connected to Mongodb')
//     response.send()
// })


//
// app.listen(port)