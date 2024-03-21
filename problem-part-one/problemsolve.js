
//Task-1:
//Write a function to convert temperature from Celsius to Fahrenheit.
//(0°C × 9/5) + 32 = 32°F

function celToFar(celsius){
    let Fahrenheit = (celsius *9/5)+32;
    return Fahrenheit;
}
console.log(celToFar(30));
// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function countNumber(array,number){
const getarray = array;
const getnumber = number;

let count_num = getarray.length;
let cout= 0;

for (let i = 0; i < count_num; i++ ) {
    if(array[i] ==getnumber){
        cout++;
    }
}

return cout;
}
const numbers = [5,6,11,12,98, 5];
const find = 5 ;
console.log(countNumber(numbers,find));


// Task-3:
// Write a function to count the number of vowels in a string.
function countVowel(str) { 

    const count = str.match(/[aeiou]/gi).length;

    return count;
}

const string = "This is some text for find vowel";

const result = countVowel(string);

// Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

function longestWord(text){ 
    text = text.match(/[a-zA-Z0-9]+/gi); 
    
    let longest = ""; 
         
    for(let i = 0; i <text.length; i++){ 
        if(text[i].length > longest.length){ 
        longest = text[i] 
        } 
    } 
    return longest; 
    } 
     
    console.log(longestWord("I am automation engineer and, I am learning Programming to become a programmer"));



// Task-5:
// Generate a random number between 10 to 20.

function random_number(minnum, maxnum) {
    return Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
}

let generate_number = random_number(10, 20);
console.log(generate_number);