var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Hello the node app is working fine');
    response.end();

}

http.createServer(onRequest).listen(80);