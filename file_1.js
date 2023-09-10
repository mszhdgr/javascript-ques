// Write a JavaScript function that uses a ternary operator to determine if a given number is even or odd and returns the result as a string ("even" or "odd").
//
function determinor()
{
	let numbers = [2,3,6,7,8,1]
	/* numbers.forEach(element => {
	if(element % 2 === 0){

	console.log('even')


	} else{

	console.log('odd')

	}


	})*/

	numbers.forEach(element => element % 2 === 0 ? console.log('even'):console.log('odd'))
}
determinor()
