var url = require('url');
module.exports = function(req){
	req.url = url.parse(req.url, true);	
}
