
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
/*
-----CHALLENGE 6-----

In tennis, a set is finished when one of the players wins 6 games and the other one wins less than 5, or, if both players win at least 5 games, until one of the players win 7 games.

Determine if it is possible for a tennis set to be finished with the score score1 : score2.

Example

For score1 = 3 and score2 = 6, the output should be
tennisSet(score1, score2) = true;
For score1 = 8 and score2 = 5, the output should be
tennisSet(score1, score2) = false;
For score1 = 6 and score2 = 5, the output should be
tennisSet(score1, score2) = false.

SOLUTION 6:
Passes the tests, but I want to come up with a better solution.
*/
function tennisSet(score1, score2) {
    if(score1 == 7 && score2 < 7){
        if( score2 == 2){
            return false;
        } else {
            return true;
        }
    }
    if(score1 == score2 ){
        return false;
    } 
    if(score1 >= 6 ){
        if(score2 < 5){
            return true;
        } else if (score2 >= 5){
            return false;
        }
    }    
    if(score2 >= 6 ){
        if(score1 < 5){
            return true;
        } else if (score1 >= 5){
            return false;
        }
    }
}
/*
-----CHALLENGE 7-----

Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.

A person contradicts Mary's belief if one of the following statements is true:

they are young and beautiful but not loved;
they are loved but not young or not beautiful.
Example

For young = true, beautiful = true and loved = true, the output should be
willYou(young, beautiful, loved) = false.

Young and beautiful people are loved according to Mary's belief.

For young = true, beautiful = false and loved = true, the output should be
willYou(young, beautiful, loved) = true.

Mary doesn't believe that not beautiful people can be loved.

SOLUTION 7:

*/
function willYou(young, beautiful, loved) {
    if(young == true && beautiful == true && loved == true){
        return false;
    }
    
    if(young == true && beautiful == false && loved == true){
        return true;
    }
    
    if(young == false && beautiful == false && loved == false){
        return false;
    }
        
    if(young == false && beautiful == false && loved == true){
        return true;
    }
}
/*
/*
-----CHALLENGE 8-----

You just bought a public transit card that allows you to ride the Metro for a certain number of days.

Here is how it works: upon first receiving the card, the system allocates you a 31-day pass, which equals the number of days in January. The second time you pay for the card, your pass is extended by 28 days, i.e. the number of days in February (note that leap years are not considered), and so on. The 13th time you extend the pass, you get 31 days again.

You just ran out of days on the card, and unfortunately you've forgotten how many times your pass has been extended so far. However, you do remember the number of days you were able to ride the Metro during this most recent month. Figure out the number of days by which your pass will now be extended, and return all the options as an array sorted in increasing order.

Example

For lastNumberOfDays = 30, the output should be
metroCard(lastNumberOfDays) = [31].

There are 30 days in April, June, September and November, so the next months to consider are May, July, October or December. All of them have exactly 31 days, which means that you will definitely get a 31-days pass the next time you extend your card.

SOLUTION 8:

*/
function metroCard(lastNumberOfDays) {

}



/*


// Tanise Williams, 2016 