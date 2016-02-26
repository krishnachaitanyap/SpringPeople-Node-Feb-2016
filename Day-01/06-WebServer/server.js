var http = require('http');
var fs = require('fs');
var path = require('path');
/*
req.url -> resource requested
fs.existsSync -> if a file exists or not
__dirname -> current folder
path.join(__dirname, req.url) -> actual physical path of the resource
if (file not exists){
	res.statusCode = 404;
	res.end();
}
}
*/


var server = http.createServer(function(req, res){
	var resourceRequested = req.url;
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
});
server.listen(8080);
console.log('server listening on port 8080..!!');