const requestIp = require('request-ip');
var port = 81;
console.log('start port on port ', port);
var http = require('http').createServer((req, res,netx) => {
    const clientIp = requestIp.getClientIp(req); 
    console.log('request from : ' , clientIp);
    res.write('APP 1 on port '+ port);
    res.end();
}).listen(port);