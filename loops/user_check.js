// take user input and return if its odd or even
//
function userOddorEven()
{
	let readLine = require('readline')
	let rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout
	})
	rl.question('what is your age ? ', (elm) =>
		{
			if(elm % 2 === 0){
				console.log('your age is an even no')
			} else {
				console.log('your age is odd no')
			}
		rl.close()
		})
}
userOddorEven()
