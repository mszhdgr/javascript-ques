//use for of to execute conditionals
//
function brekContin()
{
	let numbers = [0,1,2,3,6,7,8,9,10,11,12]
	
	console.log('Even numbers')
	for(let i of numbers){
		if(i % 2 === 0){			
			console.log(i)
		} else{
			continue
		}
	}
	console.log('numbers <= 6')
	for (const x of numbers){
		if(x <= 6){
			console.log(x)
		} else{
			break
		}
	}
}
brekContin()
