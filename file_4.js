// Write a program that converts a numeric grade (e.g., 90, 75) into a letter grade (A, B, C, etc.) using a switch statement.
//
function gradeConverter()
{
	const readLine = require('readline')
	const rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout
	})
	rl.question(
		'Enter your Score ? ', (score) => {
			switch(score){
			case '80':
				console.log('You scored an A')
			break
			case '70':
				console.log('You scored B')
			break
			case '45':
				console.log('You scored C')
			break
			case '36':
				console.log('You scored D')
			break
			default:
				console.log('enter correct score')
			}
		rl.close()

		})
	
}
gradeConverter()
