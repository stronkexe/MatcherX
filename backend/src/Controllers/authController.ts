const pool = require('../../database/dbConfig')

const login = async (req: any, res: any) => {
  
	try {
		const client = await pool.connect();
		const result = await client.query('SELECT * FROM user')
		res.json(result.rows);
		client.release()
	}
	catch (err) {
		console.error('Error executing query', err);
		res.status(500).send('Internal Server Error');
	}
};

module.exports = { login }
