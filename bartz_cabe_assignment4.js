//Cabe Bartz
//SDI 1206
//June 17th, 2012
//assignment 4

// alert("JavaScript works!");
//utilityLibary is a library for the utility function I have created.
var utilityLibrary = function () {

//numMoney converts numbers to 2 places after decimal ie dollers.  The dollar
//argument is the number you want changed.  the toFixed parameter is how many
//places after decimal point.
	var numMoney = function (dollar) {
		var convertDollar = dollar.toFixed(2);
		return convertDollar;
	},//end numMoney

//stringNumber converts a number inside of a string into a number. string
//argument is the string that will be converted to a number.
		stringNumber = function (string) {
			var convertString = parseFloat(string);
			return convertString;
		},//end stringNumber

//phoneNumber determines whether a string "num" is in a 000-000-0000 phone
//number format.  will return true if it is or false if it is not
		phoneNumber = function (num) {
			var checkNum;
			if ((num.length === 12) && (num.charAt(3) === "-") && (num.charAt(7) === "-")) {
				checkNum = true;
			} else {
				checkNum = false;
			}
			return checkNum;
		},//end phoneNumber

//emailAddress determines whether a string follows the aaa@bbb.ccc format.  If
//so, it will return true.  If not, it will return false.
		emailAddress = function (string) {
			var checkAddr;
			if ((string.indexOf(".") > string.indexOf("@")) && (string.match("@") !== null)) {
				checkAddr = true;
			} else {
				checkAddr = false;
			}
			return checkAddr;
		},//end emailAdress
//fuzzyMatch takes a number(num) and check to see if it is with a percentage(percent) of another number (aboveBelow)
//will return boolean true if it is equal to or within the specified percentage
		fuzzyMatch = function (num, aboveBelow, percent) {
			var numMatch,
				convertPercent = percent / 100,
				numPercent = num * convertPercent,
				numDiff1 = Math.abs(aboveBelow - num),
				numDiff2 = Math.abs(num - aboveBelow);
			if (num === aboveBelow) {
				numMatch = true;
			} else if ((numDiff1 || numDiff2) <= numPercent) {
				numMatch = true;
			} else {
				numMatch = false;
			}
			return numMatch;
		},

//sumArray finds a total value of nummbers in an array.  If an array
//parameter is NaN, sumArray will just add the numbers.  If strings in array
//are numbers, it will not add them.  Would need to parseFloat array if that is desired.
		sumArray = function (array) {
			var arrayTotal = 0,
				i,
				numArray;
			for (i = 0; i < array.length; i++) {
				numArray = array[i];
				if (!isNaN(numArray)) {
					arrayTotal += numArray;
				}
			}
			return arrayTotal;
		};//end sumArray
	return {
		"numMoney" : numMoney,
		"stringNumber" : stringNumber,
		"phoneNumber" : phoneNumber,
		"emailAddress" : emailAddress,
		"fuzzyMatch" : fuzzyMatch,
		"sumArray" : sumArray
	};
}; //end utility Library
var utilityLib = new utilityLibrary();
console.log(utilityLib.numMoney(2.1));
console.log(utilityLib.stringNumber("43.3"));
console.log(utilityLib.phoneNumber("123-456-7890"));
console.log(utilityLib.emailAddress("cabebartz@fullsail.edu"));
console.log(utilityLib.fuzzyMatch(100, 102, 5));
console.log(utilityLib.sumArray([1, 3.3, "bob", 20]));