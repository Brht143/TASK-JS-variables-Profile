/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

let fullName ="Ibrahim Elchami"
let yearOfBirth = 1990
let hobby = "Coding"
let funFact = "FunFact!"
const image = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExODV4eXU3aWF4M3A3emtsYWJubWgzYnRsNGVya3Z0eHU2cnA3aHFiYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T8Dhl1KPyzRqU/200.webp"


/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */
let now = new Date;

const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `I am ${now.getFullYear()-yearOfBirth}`
const hobbyString = `My hobby is ${hobby}`




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars += 1;
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars -= 1;
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars += 2;
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars -= 2;
}
