//const { Pool } = require('pg')
//DATABASE_URL = "postgres://[matchadb]:[pass1234]@127.0.0.1:5432/node-postgres-pg"

//const pool = new Pool({ connectionString: DATABASE_URL })
//function query(script) {
//	return new Promise((resolve, reject) => {
//		pool
//		.query(script)
//		.then((res) => { resolve(res) })
//		.catch((err) => { reject(err) })
//	} )
//}

//module.exports = { query }

import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp({
  connectionString: 'postgres://stronk:pass@localhost:5432/matchadb',
});

export default db;
