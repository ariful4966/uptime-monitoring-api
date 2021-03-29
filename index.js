

//Dependencies

const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder')

// app object - module scaffolding

const app = {};

//configuration

app.config = {
    port: 3000
};

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to post ${app.config.port}`);
    });
}

//handle Reaquest Response

app.handleReqRes = (req, res) => {
    //Request Haqndle
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    })
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        //response handle
        res.end('Hellow Programmer');
    })



}

//Start the server
app.createServer();