const requestIp = require('request-ip');
var port = 82 ;
console.log('start port on port ', port);
var http = require('http').createServer((req, res,netx) => {
    const clientIp = requestIp.getClientIp(req); 
    console.log('request from : ' , clientIp);
    res.write('App 2 on port '+ port);
    res.end();
}).listen(port);