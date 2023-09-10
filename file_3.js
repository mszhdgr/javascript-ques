// Implement a JavaScript function that takes a day of the week as input (e.g., "Monday") and uses a switch statement to output whether it's a weekday or a weekend day.
//
function dayChecker()
{
	const readLine = require('readline')
	const rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout
	})
	rl.question('Enter the day of the week ? ', (elm) => {
		switch(elm.toLowerCase()){
		case 'monday':
			console.log('weekday')
		break
		case 'tuesday':
			console.log('weekday')
		break
		case 'wednesday':
			console.log('weekday')
		break
		case 'thursday':
			console.log('weekday')
		break
		case 'friday':
			console.log('weekday')
		break
		case 'saturday':
		case 'sunday':
		console.log('weekend')
		break
		default:
		console.log('oops')
		}
		rl.close()
	})
}
dayChecker()
