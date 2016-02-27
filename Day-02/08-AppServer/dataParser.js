var url = require('url');
var qs = require('querystring');
module.exports = function(req, res, next){
	req.body = {};
	req.field = function(attrName){
		return req.url.query[attrName] || req.body[attrName];
	};
	req.url = url.parse(req.url, true);	
	if (req.method === 'POST'){
		var reqDataString = '';
		req.on('data', function(chunk){
			reqDataString += chunk;
		});
		req.on('end', function(){
			req.body = qs.parse(reqDataString);
			next();
		});
		
	} else {
		next();
	}
	
}
