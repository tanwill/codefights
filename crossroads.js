
//ARCADE - AT THE CROSSROADS//

/*
-----CHALLENGE 1-----

You are playing an RPG game. Currently your experience points (XP) total is equal to experience. To reach the next level your XP should be at least at threshold. If you kill the monster in front of you, you will gain more experience points in the amount of the reward.

Given values experience, threshold and reward, check if you reach the next level after killing the monster.

Example

For experience = 10, threshold = 15 and reward = 5, the output should be
reachNextLevel(experience, threshold, reward) = true;
For experience = 10, threshold = 15 and reward = 4, the output should be
reachNextLevel(experience, threshold, reward) = false.

SOLUTION 1:
*/
function reachNextLevel(experience, threshold, reward) {
	if(reward + experience >= threshold){
		return true;
	} else {
		return false;
	}
}


/*
/*
-----CHALLENGE 2-----

You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

Example

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 8, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) = 10.

You can only carry the first item.

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 9, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) = 16.

You're strong enough to take both of the items with you.

SOLUTION 2:

Now solved, but I initially submitted an issue here: https://github.com/Code-Fights/codefights-wiki/issues/111
*/


function knapsackLight(value1, weight1, value2, weight2, maxW) {
	var weightBoth = weight1 + weight2;
	var valueBoth = value1 + value2;
	
	if(maxW >= weightBoth){
		return valueBoth;
	}

	if(maxW < weightBoth){
		if(maxW >= weight1 && maxW >= weight2) {
			if(value1 > value2){
				return value1;
			} else if (value2 > value1){
				return value2;
			} else {
				return value1;
			}
		} else if(maxW >= weight1 || maxW >= weight2){				
			if(maxW >= weight1){
				return value1;
			} else if (maxW >= weight2) {
				return value2;
			} else {
				return 0;
			}
		} else {
			return 0;
		}
	}
}


/*
-----CHALLENGE 3-----

You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

Example

For a = 2, b = 7 and c = 2, the output should be
extraNumber(a, b, c) = 7.

The two equal numbers are a and c. The third number (b) equals 7, which is the answer.

SOLUTION 3:
*/
function extraNumber(a, b, c) {
	if(a == b){
		return c;
	} else if (b == c){
		return a;
	} else if (c == a){
		return b;
	}   
}

/*

/*
-----CHALLENGE 4-----

Given integers a and b, determine whether the following pseudocode results in an infinite loop

while a is not equal to b do
  increase a by 1
  decrease b by 1
Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

Example

For a = 2 and b = 6, the output should be
isInfiniteProcess(a, b) = false;
For a = 2 and b = 3, the output should be
isInfiniteProcess(a, b) = true.

SOLUTION 4:

Still working on this one.

*/
function isInfiniteProcess(a, b) {
	if(0<=a && a<=20 && 0<=b && b<=20){
		if(b>=a && (b-a)%2==0) {
			return false;
		}
		else {
			return true;
		}
	}
}


/*

/*
-----CHALLENGE 5-----

Consider an arithmetic expression of the form A#B=C. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

Example

For A = 2, B = 3 and C = 5, the output should be
arithmeticExpression(A, B, C) = true.

We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.

For A = 8, B = 2 and C = 4, the output should be
arithmeticExpression(A, B, C) = true.

We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.

For A = 8, B = 3 and C = 2, the output should be
arithmeticExpression(A, B, C) = false.

8 + 3 = 11 ≠ 2;
8 - 3 = 5 ≠ 2;
8 * 3 = 24 ≠ 2;
8 / 3 = 2.(6) ≠ 2.
So the answer is false.

SOLUTION 5:

*/
function arithmeticExpression(A, B, C) {
    var counter = 0;
    if(A + B === C){
        counter++;
    }
    if(A - B === C){
       counter++; 
    }
    if(A * B === C){
       counter++; 
    }
    if(A / B === C){
       counter++; 
    }
    if(counter > 0){
        return true;
    } else { 
        return false }
}

/*

// Tanise Williams, 2016 