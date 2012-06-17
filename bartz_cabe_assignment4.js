//Cabe Bartz
//SDI 1206
//June 17th, 2012

// alert("JavaScript works!");

//var numMoney converts numbers to 2 places after decimal ie dollers
var numMoney = function(dollar){
	var dollar = dollar.toFixed(2);
	return dollar;	
};
console.log(numMoney(2.1);