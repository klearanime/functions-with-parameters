// Create a variable called x and set it to the value 3.
let x = 3;
// Create a variable called y and set it to the value 10.
let y = 10;
// Create a variable called z and set it to the value 5.
let z = 5;
// Create a variable called name and set it the string version of your first name.
let name = 'Crystal';
// Create a variable called greeting and set it to the value 'HEY'.
let greeting = 'HEY';
// Create a function called multiply that takes in one parameter and changes x to the product of x and that parameter.
function multiply(num) {
    x = x * num;
}
// Create a function called modYBy that takes in one parameter, divides y by that parameter, and sets y to the remainder of that division. Look up the JavaScript modulus operator if you don't remember it, because it could sure come in handy here!
function modYBy(num) {
    y = y % num;
}
// Create a function called opposite that takes in a parameter and sets z to equal the opposite sign of that parameter. Note that we are not "reading" the value of z here. In other words, unlike the other problems here, it doesn't matter what z used to be!
function opposite(num) {
    z = num * -1;
}
// Create a variable called makeFullName that takes in a string parameter and sets name to have that string at the end, with a space in the middle.
function makeFullName(fullName) {
    name = name + ' ' + fullName;
} 
// Create a function called yellAt that takes in a string parameter and adds that string to the end of greeting, with a comma and a space in between and an exclamation point at the end. This string concatenation (or "smooshing" in the technical parlance) should be set to be the new value of greeting.
function yellAt(name) {
    greeting = greeting + ', ' + name + '!';
}

/*********************************************************************************************************************
 
 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof x === 'undefined') {
  x = undefined;
}

if (typeof y === 'undefined') {
  y = undefined;
}

if (typeof z === 'undefined') {
  z = undefined;
}

if (typeof name === 'undefined') {
  name = undefined;
}

if (typeof greeting === 'undefined') {
  greeting = undefined;
}


if (typeof multiply === 'undefined') {
  multiply = undefined;
}

if (typeof modYBy === 'undefined') {
  modYBy = undefined;
}

if (typeof opposite === 'undefined') {
  opposite = undefined;
}

if (typeof makeFullName === 'undefined') {
  makeFullName = undefined;
}

if (typeof yellAt === 'undefined') {
  yellAt = undefined;
}

if (typeof fullName === 'undefined') {
  fullName = undefined;
}

if (typeof phoneCall === 'undefined') {
  phoneCall = undefined;
}


describe('multiply', () => {
  it(`multiplies x by the given parameter'`, () => {
    multiply(15);
    multiply(3);
    expect(x).toBe(135)
  })
});

describe('modYBy', () => {
  it(`runs a modulus operation on y`, () => {
    modYBy(4);
    expect(y).toEqual(2);
  })
});

describe('opposite', () => {
  it(`sets z to the opposite of the given parameter`, () => {
    opposite(3);
    expect(z).toBe(-3);
  })
});

describe('makeFullName', () => {
  it(`adds a space and the parameter to name`, () => {
    const oldName = name;
    makeFullName('Jaffe')
    expect(name).toBe(`${oldName} Jaffe`);
  })
});

describe('yellAt', () => {
  it(`makes_greeting_into_a_string_that_yells_the_greeting_at_someone`, () => {
    yellAt('Colin');
    expect(greeting).toEqual(`HEY, Colin!`);
  })
});