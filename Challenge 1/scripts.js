// problem: there is both a variable and function with the name 'hobby'

// defining the variables with values
firstName = 'John';
age = 35;
hobby = 'Coding';

// defining an arrow function called logTwice, using a single parameter called (message) which is logged to the console twice
const logTwice = (message) => {
  console.log(message) // changed "console" to "console.log"
  console.log(message)
}

// changed this from a function declaration to an arrow function
const logJohnInfo = () => { // 'hobby' was assigned to both a string and function so i changed the function name from 'hobby' to 'logJohnInfo'
  const message = `Hello, ${firstName} (${age}). I love ${hobby}!` // corrected 'name' to 'firstName'. 
  logTwice(message);
}

// calling the 'hobby function' (the code block above) - which in turn calls the 'logTwice' function
logJohnInfo()