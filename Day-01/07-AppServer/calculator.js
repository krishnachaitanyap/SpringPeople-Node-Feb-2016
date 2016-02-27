/*Create a calculator.js file that does the following
1. create a calculator object with the following methods
	- add(x,y)
	- subtract(x,y)
	- multiply(x,y)
	- divide(x,y)

2. Execute all the methods of the calculator for x = 200 and y = 100 and print the results*/
var calculator = {
	add : function(x,y){
		return x + y;
	},
	subtract : function(x,y){
		return x - y;
	},
	multiply : function(x,y){
		return x * y;
	},
	divide : function(x,y){
		return x / y;
	}
}
module.exports = calculator;