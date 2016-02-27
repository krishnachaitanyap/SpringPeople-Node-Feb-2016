var http = require('http');
var dataParser = require('./dataParser');
var staticResourceRequestHandler = require('./staticResourceRequestHandler');
var calculatorRequestHandler = require('./calculatorRequestHandler');
var notFoundHandler = require('./notFoundHandler');
var app = require('./app');

app.use(dataParser);
app.use(staticResourceRequestHandler);
app.use(calculatorRequestHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);
console.log('server listening on port 8080..!!');
