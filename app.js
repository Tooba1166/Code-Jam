// Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.

function reverse(arr) {
    let reverArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverArr.push(arr[i]);
    }
    return reverArr;
}

let smallArray = [1, 2, 3, 4, 5];
console.log("Actual array:", smallArray);
console.log("Reverse array:", reverse(smallArray));

let largeArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Actual array:", largeArray);
console.log("Reverse array:", reverse(largeArray));



// Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”

function negativeNum(arr) {
    return arr.filter(number => number >= 0);
  }
  
  const numbers = [1, -2, 3, -4, 5, -6];
  const filteredNum = negativeNum(numbers);
  console.log(negativeNum); 
  


// Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.


function vowels(str) {
    let vowelCount = 0;

    const vowels = 'aeiou';

    const lowerCase = str.toLowerCase();

    for (let i = 0; i < lowerCase.length; i++) {
       
        if (vowels.includes(lowerCase[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

const example = "Hello World!";
console.log(vowels(example)); 



// Check if a string is a palindrome. A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
// “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
// and returns a Boolean indicating whether the string is a palindrome. Test your
// function with different strings to ensure it works correctly.

function isPalindrome(str) {
 
    str = str.toLowerCase();

    str = str.replace(/[^a-z0-9]/g, '');
 
    return str === str.split('').reverse().join('');
}


const test = ["kayak", "mom", "radar", "refer", "Hello", "A man, a plan, a canal, an apple", "yes 'y' camel"];

test.forEach(function(test) {
    console.log(`'${test}' is a palindrome: ${isPalindrome(test)}`);
});



//     Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.

function range(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

console.log(range(45, 55)); 
console.log(range(35, 105)); 
console.log(range(60, 90)); 
console.log(range(20, 30)); 
console.log(range(99, 100)); 


// Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.

function minValue(arr, mapFunction) {
    const mapArray = arr.map(mapFunction);

    const minValue = Math.min(...mapArray);
    
    return minValue;
}
const array = [3, 7, 2, 8, 5];

function square(x) {
    return x * x;
}
const minSquare = minValue(array, square);
console.log("Minimum value of squares:", minSquare); 


// Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.

function updateString(originalString) {

    if (originalString.length >= 3) {
   
        const lastChar = originalString.slice(-3);
       
        const updateString = lastChar.repeat(4);
        
        return updateString;
    } else {
        return "";
    }
}

const original = "JavaScript";
const result = updateString(original);
console.log("Updated string:", result); 


// Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function types(degrees) {
    if (degrees > 0 && degrees < 90) {
        return "Acute angle";
    } else if (degrees === 90) {
        return "Right angle";
    } else if (degrees > 90 && degrees < 180) {
        return "Obtuse angle";
    } else if (degrees === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}

console.log(types(45));  
console.log(types(90));  
console.log(types(120)); 
console.log(types(180)); 
console.log(types(0));   
console.log(types(200)); 


// Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.

function smallestRoundNum(value) {
 
    if (value % 10 === 0) {
        return value; 
    }
   
    let roundNumber = value;
    while (roundNumber % 10 !== 0) {
        roundNumber++;
    }
    
    return roundNumber;
}

console.log(smallestRoundNum(590));   
console.log(smallestRoundNum(592));   
console.log(smallestRoundNum(600));   
console.log(smallestRoundNum(100));   
console.log(smallestRoundNum(1234)); 


// Write a JavaScript program to find the index of an array item in a for loop.

const arra = ['apple', 'banana', 'cherry', 'grapes', 'strawberry'];

const itemFind = 'cherry';

let index = -1;
for (let i = 0; i < array.length; i++) {
  if (array[i] === itemFind) {
    index = i;
    break; 
  }
}

if (index !== -1) {
  console.log(`The index of ${itemFind} is ${index}.`);
} else {
  console.log(`${itemFind} is not in the array.`);
}
