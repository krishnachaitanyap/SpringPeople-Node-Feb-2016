define(['calculator'], function(calculator){
	var calculatorClient = {
		run : function(){
			console.log('calculator => ', calculator);
			var x = 200,
				y = 100;
			console.log(calculator.add(x,y));
			console.log(calculator.subtract(x,y));
			console.log(calculator.multiply(x,y));
			console.log(calculator.divide(x,y));
		}
	};
	return calculatorClient;
});


