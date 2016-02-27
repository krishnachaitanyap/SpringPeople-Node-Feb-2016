/*if (request is for static resource [.html, .xml, .js, .png], path.extname){
	handle it like a static web server
} else if (request is for '/calculator' and req.method === 'GET'){
	url.parse(req.url, true)
	invoke the calculator accordingly
	write the result in the response
} if (request is for '/calculator' and req.method === 'POST'){
	url.parse(req.url, true)
	treat the req obj as a stream and read the data from req stream and use querystring.parse to parse the data
	invoke the calculator accordingly
	write the result in the response
} else {
	404
}*/



var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');          
var qs = require('querystring');   
var calculator = require('./calculator');

var staticResourceExtns = ['.html', '.js', '.css', '.png', '.jpg', '.ico'];
function isStaticResource(resourceName){
	return staticResourceExtns.indexOf(path.extname(resourceName)) !== -1;
}
var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url, true);
	console.log(urlObj);
	var resourceRequested = urlObj.pathname;
	if (isStaticResource(resourceRequested)){
		var resourcePath = path.join(__dirname, resourceRequested);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resourcePath);
		stream.on('data', function(chunk){
			res.write(chunk);
		});
		stream.on('end', function(){
			res.end();
		});
	} else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var reqData = urlObj.query;
		var operation = reqData.op,
			n1 = parseInt(reqData.x),
			n2 = parseInt(reqData.y);
		var result = calculator[operation](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var reqDataString = '';
		req.on('data', function(chunk){
			reqDataString += chunk;
		});
		req.on('end', function(){
			var reqData = qs.parse(reqDataString);
			var operation = reqData.op,
				n1 = parseInt(reqData.x),
				n2 = parseInt(reqData.y);
			var result = calculator[operation](n1, n2);
			res.write(result.toString());
			res.end();
		});
		
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8080);
console.log('server listening on port 8080..!!');