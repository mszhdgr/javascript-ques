// Create a program that takes a user's age as input and uses a ternary operator to check if the person is eligible for voting (age 18 or older) or not.
//
const readline = require('readline');

const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

rl.question('Enter your age: ', (userInput) => {
	  userInput >= 18 ? console.log('can vote'):console.log('u cant vote')
	  rl.close();
});

