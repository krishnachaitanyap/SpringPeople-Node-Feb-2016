var fs = require('fs');
fs.readFile('./sample.txt', {encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log('something went wrong - ', err);
		process.exit(1);
	}
	console.log(fileContents);
});
