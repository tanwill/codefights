
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

This is currently failing 2 out of 7 tests, but I can't figure out why. I suspect a bug on CodeFights end, but we will see. 

I submitted an issue here: https://github.com/Code-Fights/codefights-wiki/issues/111
*/


function knapsackLight(value1, weight1, value2, weight2, maxW) {
	var weightBoth = weight1 + weight2;
	var valueBoth = value1 + value2;
	
	if(maxW >= weightBoth){
		return valueBoth;
	}

	if(maxW < weightBoth){
		if(maxW >= weight1 && maxW >= weight2) {
			if(weight1 > weight2){
				return value1;
			} else if (weight2 > weight1){
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

// Tanise Williams, 2016 