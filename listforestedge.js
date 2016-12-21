
//ARCADE - List Forest Edge//

/*
-----CHALLENGE 1-----

Given an integer size, return array of length size filled with 1s.

Example

For size = 4, the output should be
createArray(size) = [1, 1, 1, 1].

SOLUTION 1:
*/

function createArray(size) {
	myArray = [];
	for(i = 0; i < size; i++){
		myArray.push(1);
	}
	return myArray;
}

/*
//ARCADE - List Forest Edge//

/*
-----CHALLENGE 2-----

Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be
arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

SOLUTION 2:
Not finished. I want to try something different with this one, like the map or foreach methods.
*/

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
	var myArr = inputArray.map(function(x) { 
		if (x == elemToReplace){
			x == substitutionElem;
		} 
	});	
	return x;
}

/*
// Tanise Williams, 2016 