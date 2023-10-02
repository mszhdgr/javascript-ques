//using anonym ()

let age = [1,2,3,6,7,8,9]

age.filter((odd) => {
	return odd % 2 === 0 ? console.log("Even"):console.log("Odd")
})
