var http = require('http');
var dataParser = require('./dataParser');
var staticResourceRequestHandler = require('./staticResourceRequestHandler');
var calculatorRequestHandler = require('./calculatorRequestHandler');
var notFoundHandler = require('./notFoundHandler');

var server = http.createServer(function(req, res){
	dataParser(req);
	staticResourceRequestHandler(req, res);
	calculatorRequestHandler(req, res);
	notFoundHandler(req, res);
});

server.listen(8080);
console.log('server listening on port 8080..!!');
