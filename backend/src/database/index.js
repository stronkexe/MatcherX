import { Pool } from 'pg'
import config from '../config.js'

const pool = new Pool {(
	host: config.host,
	database: config.database,
	user: config.user,
	password: config.password,
	port: parseInt(config.port as string, 10),
)}

pool.on('err', (err) => {
	console.error(err.message)
})

export default pool
