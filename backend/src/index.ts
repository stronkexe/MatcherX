import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import db from '../database/dbConfig'

const app = express()

app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
	console.log(`server listining on port ${8080}`)
})

// test test test

db.one('SELECT 1')
  .then((data) => {
    console.log('Connection to PostgreSQL established successfully');
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL:', error);
  });

app.get('/users', async (req, res) => {
	try {
    		const users = await db.any('SELECT * FROM users;');
    		res.json(users);
  	}
	catch (error) {
    		res.status(500).json({ error: 'Internal Server Error' });
  	}
})
