function f1Sync(){
	console.log('f1Sync Started');
	console.log('f1Sync Completed');
}

function f2Sync(){
	console.log('f2Sync Started');
	console.log('f2Sync Completed');
}
function f3Sync(){
	console.log('f3Sync Started');
	console.log('f3Sync Completed');
}
function f4Sync(){
	console.log('f4Sync Started');
	console.log('f4Sync Completed');
}

module.exports.runSync = function(){
	f1Sync();
	f2Sync();
	f3Sync();
	f4Sync();
}

function f1(){
	console.log("f1 Started");
	setTimeout(function(){
		console.log("f1 Completed");
	},3000);
}

function f2(){
	console.log("f2 Started");
	setTimeout(function(){
		console.log("f2 Completed");
	},3000);
}

function f3(){
	console.log("f3 Started");
	setTimeout(function(){
		console.log("f3 Completed");
	},3000);
}

function f4(){
	console.log("f4 Started");
	setTimeout(function(){
		console.log("f4 Completed");
	},3000);
}

module.exports.run =function(){
	f1();
	f2();
	f3();
	f4();
};