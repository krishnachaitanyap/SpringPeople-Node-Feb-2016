console.log('loading accumulator');
module.exports = function(){
	var result = 0;
	return {
		accumulate : function(n){
			result += n;
		},
		getResult : function(){
			return result;
		}
	}
};