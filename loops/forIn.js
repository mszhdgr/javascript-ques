// show object keys
// 
function showKeys()
{
	let students = {'name': 'mike', 'age': 29, 'hobby': 'fishing'}

	for (const i in students){
		console.log(i)
	}

}
showKeys()
