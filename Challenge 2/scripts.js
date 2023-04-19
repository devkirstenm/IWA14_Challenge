// arrow functions called 'add' that takes 2 parameters (a,b). Function returns the sum of a and b
const add = (a, b) => a + b // removed brackets around a+b and changed function to const as arrow functions don't require 'function'
const multiply = (a, b) => a * b // added brackets around a,b and removed brackets around a-b, and change 'function' to 'const'. removed - and added * as this is a multiplication

// function declaration called 'internal'
function internal() { 
	const added = add(parseFloat(this.a), parseFloat(this.b)) 
	const multiplied = multiply(parseFloat(this.c), added)
	//console.log internal function
	console.log(multiplied) 
}

// Not allowed to change below this

// object called 'example1' with four properties (internal, add, multiply, calculate)
const example1 = { 
	internal: { // object with 3 properties (a,b,c - number values)
		a: 2, 
		b: 4, 
		c: 8,
	},
	add, // function that takes 2 numeric arguments and returns their sum
	multiply, // *same idea
  calculate: internal // reference to the 'internal' function that is defined elsewhere. Meaning that 'example1.calculate' is a function that has the same behaviour as the internal function
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()


