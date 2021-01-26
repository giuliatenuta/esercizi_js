const fs = require("fs")
const risultati= [null,null,null]

fs.readFile("./testo1.txt", (err, data) => {
	if (err) {
		throw err
	} else{
		console.log("Ho caricato testo 1")
		const testo1= data.toString()
		risultati[0]=testo1
		fs.readFile("./testo2.txt", (err, data) => {
		if (err) {
			throw err
		} else{
			console.log("Ho caricato testo 2")
			const testo2 = data.toString()
			risultati[1]=testo2
			fs.readFile("./testo3.txt", (err, data) => {
		if (err) {
			throw err
		} else{
			console.log("Ho caricato testo 3")
			const testo3 = data.toString()
			risultati[2]=testo3
		}
		}
	}
})


fs.writeFile(".testofinale.txt", (err, data) => {
	if (err) {
		throw err
	}
	data = risultato[0] + " " + risultato[1] + " " +risultato[2] + " "
	const testo4 = data.toString()
	console.log(testo4)
})
