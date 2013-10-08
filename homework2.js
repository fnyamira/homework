
// Problem 1) Using JavaScript comments, write your name and today's date below
//Fiona Nyamira,
//17th of September, 2013
 

// Problem 2) Create separate variables to store the following.
// Send all variables to the console.
// Your e-mail address
// Your major
// Your favorite text editor
// A zip code
// The value of pi up to 5 decimal places (use Google to find the value)
// The total cost of a 10 dollar book plus 5% sales tax
// Whether or not the light switch is on
// Whether or not Superman can fly

var  email = "fionanyamira@gmail.com",
     major = "Web Design", //JG: Careful here. The semi-colon here meant that the rest of the variables weren't declared with a "var". While this works it can introduce problems when done inside functions as the variables without a "var" are considered global.
     favoriteEditor = "Sublime for now",
     zipCode = "20903",
     bookCost = 10 * 1.05, //JG: This formula doesn't work and it should be numeric, not a string. See corrected formula.
     pi = 3.14159, //JG: Should be numeric
     lightSwitchIsOn = false,
     supermanCanFly = true; //JG: Don't start a variable name with a capital letter

//JG: Improved readability
console.log(
  email, 
  major, 
  favoriteEditor, 
  zipCode, 
  bookCost, 
  pi, 
  lightSwitchIsOn, 
  supermanCanFly
);



// Problem 3) Use the typeof operator to determine the data type of each variable like so.
// console.log(typeof myEmail);
// console.log(typeof myMajor);
// and so on…
// Make sure you have at least one string, at least one number, and at least one Boolean.

console.log(typeof email);     
console.log(typeof major);
console.log(typeof favoriteEditor);
console.log(typeof zipCode);
console.log(typeof bookCost);
console.log(typeof pi);
console.log(typeof lightSwitchIsOn);
console.log(typeof supermanCanFly);

// Problem 4) Create string variables to store the following string values.
// Send all variables to the console.
// The dog's biting my shoes
// <a href="#">Some link</a>
// JavaScript is "easy" if you are good at it

var badDog = "The dog's biting my shoes", //JG: Again, be careful with the semi-colons
    link = "<a href = '#'>www.ms54.com</a>",
    skills = "JavaScript is \"easy\"if you are good at it."; //JG: This line of code breaks because the string isn't properly defined.

console.log(badDog,link,skills);


// Problem 5) Create an array of topics you would like to learn this semester.
// Send this array to the console.
var myArray = [
  'better usnderstanding JavaScript', 
  'variables', 
  'understanding statements applied in the function'
];

console.log (myArray);


// Problem 6) Send each item of the last array to the console.
// If your array variable is myArray then you would write
// console.log(myArray[0])
// console.log(myArray[1])
// and so on…

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

     
// Problem 7) Use the yourArrayVariable.length property to determine the size of your array.
// Send the result to the console.

myArray.length;
console.log(myArray.length);


// Problem 8) Create a function named "clickMe".
// When the user clicks the button with the ID of "clickMe" send the string
// "Leave me alone!" to the console.
// hint: Use document.getElementById to get a reference to the button in
// a similar way to how we did it in class for the currency conversion
// calculator.

//JG: This wouldn't work before because "onclick" has to be all lowercase. Did you test it to make sure? If so, what happened?
document.getElementById("clickMe").onclick = function() { 
  console.log("Leave me ALONE")
};
