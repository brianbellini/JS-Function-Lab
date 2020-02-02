/*
Here are the functions:

Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed. */
//1

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

/*
Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.*/

//2
const maxOfThree = function(num1, num2, num3) {
  if ((num1 > num2) && (num1 > num3)) {
    return num1
  } else if (num2 > num3){
    return num2
  } else {
    return num3
  }
};

/*
Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise. */

//3
function isCharAVowel(character) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return (vowels.includes(character))
};

/*
Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11. */

//4
const sumArray = function(numbers) {
  let numbersTotal;
  for (let element of numbers) {
    numbersTotal += numbers;
  };
  return numbersTotal
}


/*
Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
*/

function multiplyArray(numbers){
  let total = 1;
  for (let num in numbers) {
    total = total * numbers[num];
  }
  return total
}

/*
Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
*/

const numArgs = function(...arguments) {
  return arguments.length
}

/*
Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
*/

function reverseString(string) {
  let outputString = [];
  for (let char in string) {
    outputString.push(string[char]);
  }
  return outputString.reverse().join('')
}

/*
Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
*/

const longestStringInArray = function (arrayOfStrings) {
let longest = 0;
  for (let string in arrayOfStrings) {
    if (longest < arrayOfStrings[string].length) {
      longest = arrayOfStrings[string].length;
    }
  }
  return longest
}

/*
Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
*/

function stringsLongerThan(arrayOfStrings, stringMin) {
  let outputStrings = [];
  for (let string in arrayOfStrings) {
    if (arrayOfStrings[string].length > stringMin) {
      outputStrings.push(arrayOfStrings[string]);
    }
  }
  return outputStrings
}
