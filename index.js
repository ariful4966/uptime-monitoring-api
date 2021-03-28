

//Dependencies

const http = require('http');

// app object - module scaffolding

const app = {};

//configuration

app.config = {
    port: 3000
};

//create server
app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`Listening to post ${app.config.port}`);
    });
}

//handle Reaquest Response

app.handleReqRes = (req, res)=>{
    res.end('Hellow World')
}

//Start the server
app.createServer();