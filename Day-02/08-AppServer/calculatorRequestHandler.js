var calculator = require('./calculator');
var qs = require('querystring');

module.exports = function(req, res, next){
	if (req.url.pathname === '/calculator'){
		var operation = req.field('op'),
			n1 = parseInt(req.field('x')),
			n2 = parseInt(req.field('y'));
		var result = calculator[operation](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		next();
	}
}