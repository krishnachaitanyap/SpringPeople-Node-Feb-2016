var http = require('http');
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
function getFileContents(callback){
	var fs = require('fs');
	fs.readFile('./index.html', {encoding : 'utf8'}, function(err, fileContents){
		if (err){
			console.log('something went wrong - ', err);
			process.exit(1);
		}
		callback(fileContents);
	});
}
function getResponseWriter(req, res){
	return function writeResponse(fileContents){
		res.write(fileContents);
		res.end();
	}	
}

var server = http.createServer(function(req, res){
	console.log('req for - > ', req.url);
	getFileContents(getResponseWriter(req, res));
});
server.listen(8080);
console.log('server listening on port 8080..!!');