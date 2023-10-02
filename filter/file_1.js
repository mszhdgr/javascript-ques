let names = ["jasmine","linus","omullo","christine"]

names.filter((name) => {
	if(name.includes("j")){
		console.log(name)
	} else{
		console.log("error")
	}
})
