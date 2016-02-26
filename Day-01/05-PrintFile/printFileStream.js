var fs = require('fs');
var stream = fs.createReadStream('./sample.txt', {encoding : 'utf8'});
var readCount = 0;
stream.on('data', function(chunk){
	console.log(chunk);
	++readCount;
});
stream.on('end', function(){
	console.log('done!! with ' + readCount + ' reads...');
});
//console.log("File printed");