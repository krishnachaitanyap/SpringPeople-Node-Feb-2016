var fs = require('fs');
var path = require('path');

var staticResourceExtns = ['.html', '.js', '.css', '.png', '.jpg', '.ico'];
function isStaticResource(resourceName){
	return staticResourceExtns.indexOf(path.extname(resourceName)) !== -1;
}

module.exports = function(resourceBasePath){
	return function(req, res, next){
		var resourceRequested = req.url.pathname;
		if (isStaticResource(resourceRequested)){
			var resourcePath = path.join(resourceBasePath ,resourceRequested);
			if (!fs.existsSync(resourcePath)){
				res.statusCode = 404;
				res.end();
				return;
			}
			var stream = fs.createReadStream(resourcePath);
			stream.on('data', function(chunk){
				console.log('writing resource data');
				res.write(chunk);
			});
			stream.on('end', function(){
				res.end();
			});
		} else {
			next();
		}
	}