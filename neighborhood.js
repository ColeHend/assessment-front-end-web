let recommended = document.querySelector("#recommended")
let recommend = document.querySelector("#recommend")
let recommendAll = document.querySelector("#recommendAll")

let restNames = ["two jacks pizza","olive garden","mod Pizza"]
let restDesc = ["A pizza place","great restraunt","a great pizz place"]
let restLinks = ["https://www.twojackspizza.com/","https://www.olivegarden.com","https://modpizza.com/"]
let parkNames = ["Spanish Fork City Park","Adventure Heights All-Abilities Park"]
let parkDesc = ["A public green space with play equipment","A park built for those with special needs."]
let parkLinks = ["https://www.spanishfork.org/departments/parks_and_recreation/parks/city_park.php","https://www.spanishfork.org/departments/parks_and_recreation/parks/aap.php"]

function populateRecommended() {
    recommended.innerHTML = ""
    names = restNames.concat(parkNames)
    desc = restDesc.concat(parkDesc)
    links = restLinks.concat(parkLinks)
	for (let i = 0; i < names.length; i++) {
		let p = document.createElement("p");
		p.innerHTML = `<a href="${links[i]}">${names[i]}</a>: ${desc[i]}`
		recommended.appendChild(p)
	}
}

function suggestRandom(params) {
    recommended.innerHTML = ""
	let i = Math.floor(Math.random() * restNames.length)
    let p = document.createElement("p");
	p.innerHTML = `<a href="${restLinks[i]}">${restNames[i]}</a>: ${restDesc[i]}`
	recommended.appendChild(p)
}
recommendAll.addEventListener("click",populateRecommended)
recommend.addEventListener("click",suggestRandom)