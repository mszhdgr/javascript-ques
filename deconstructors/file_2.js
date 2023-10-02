const school = {
	nairobi: "jamu",
	kiambu: "aliance",
	kakamega: {
		national: "KK high",
		county: "matere high",
		extraCounty: "ikuywa secondary"
	}
}
const {nairobi, kiambu, kakamega: {national, county, extraCounty} } = school

console.log(nairobi)
console.log(kiambu)
console.log(national)
console.log(county)
console.log(extraCounty)
