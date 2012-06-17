//Cabe Bartz
//SDI 1206
//June 17th, 2012

// alert("JavaScript works!");

//numMoney converts numbers to 2 places after decimal ie dollers.  The dollar
//argument is the number you want changed.  the toFixed parameter is how many
//places after decimal point.
var numMoney = function(dollar){
	var dollar = dollar.toFixed(2);
	return dollar;	
};
console.log(numMoney(2.1));

//stringNumber converts a number inside of a string into a number. string
//argument is the string that will be converted to a number.
var stringNumber = function(string){
	var string = parseFloat(string);
	return string;
};
console.log(stringNumber("75.888"));

//phoneNumber determines whether a string "num" is in a 000-000-0000 phone
//number format.  will return true if it is or false if it is not
var phoneNumber = function(num){
	var num;
	if ((num.length === 12) && (num.charAt(3) === "-") && (num.charAt(7) === "-") ){
		return true;
	} else {
		return false;
	};
	return num;
};
console.log(phoneNumber("123-456-7890"))