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
console.log(phoneNumber("123-456-7890"));

//emailAddress determines whether a string follows the aaa@bbb.ccc format.  If
//so, it will return true.  If not, it will return false.
var emailAddress = function(string){
	var string;
	if ((string.indexOf(".") > string.indexOf("@")) && (string.match("@") != null) ){
		return true;
	} else {
		return false;
	};
	return string;
};
console.log(emailAddress("cabebartz@fullsail.edu"));

//isUrl determines whether a string is a URL that starts with either http: or
//https:.  It returns true if it is or false if it is not.
var isUrl = function(string){     
	var string;     
	if ((string.charAt(0) ==="h") && (string.charAt(1) === "t") && (string.charAt(2) === "t") &&
	(string.charAt(3) === "p") && (string.charAt(4) === ":")){
		return true;
	} else if ((string.charAt(0) ==="h") && (string.charAt(1) === "t") && (string.charAt(2) === "t") &&
	(string.charAt(3) === "p") && (string.charAt(4) === "s") && ((string.charAt(5) === ":"))){
		return true;
	} else{
		return false;
	};
	return string;
};
console.log(isUrl("https:google.com"));

//sumArray finds a total value of nummbers in an array.  If and array
//parameter is NaN, sumArray will just add the numbers.  If strings in array
//are numbers, it will not add them.  Would need to parseFloat array if that is desired.
var sumArray = function(array){
	var arrayTotal = 0;
	for(var i = 0; i < array.length; i++){
		var numArray = array[i];
		if (!isNaN(numArray)){
			arrayTotal += numArray;
		};	
	};
	
	return arrayTotal;
};
console.log(sumArray(["Jim", "Bob",12, 22.3, 10]));