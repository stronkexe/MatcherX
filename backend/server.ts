const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.BACKEND_PORT | 8000

app.use(express.json())

const userRoutes = require('./routes/usersRoutes')
const authenticationRoutes = require('./routes/authenticationRoutes')

app.use('/users', userRoutes)
app.use('/', authenticationRoutes)



app.listen(PORT, () => {
	console.log(`Listining on port ${PORT}..`)
})
