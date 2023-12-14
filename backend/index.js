const express = require('express')
const app = express()
const BACKEND_PORT = process.env.BACKEND_PORT | 8000

app.get('/', (req, res) => {
	console.log("we having some neww!")
	res.send('Hello matcha!')
})

app.listen(BACKEND_PORT, () => {
	console.log(`listining on port ${BACKEND_PORT}..`)
})
