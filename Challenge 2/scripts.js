// arrow functions
const add = (a, b) => a + b // removed brackets around a+b and changed function to const as arrow functions don't require 'function'

const multiply = (a, b) => a * b // added brackets around a,b and removed brackets around a-b, and change 'function' to 'const'. removed - and added * as this is a multiplication

// function declaration
function internal() {
	const added = this.a + this.b
	const multiplied= this.multiply(this.a, this.b)
	return added
}

console.log(internal)
console.log(internal)

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
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