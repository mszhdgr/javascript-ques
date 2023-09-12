// display the numbers
//
function isOddorEven()
{
	let age = [12, 16, 90, 23, 69, 10, 0]

	for(let i = 0; i < age.length; i++){
		if(age[i] % 2 === 0){
			console.log('EVEN : ', age[i])
		} else{
			console.log('ODD : ', age[i])
		}	
	}	
}
isOddorEven()
