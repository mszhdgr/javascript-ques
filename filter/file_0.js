let numbers = [0,1,2,3,6,7,8,9]

numbers.filter((great) => {
	return great >= 6 ? console.log(great):console.log("its small")
})
