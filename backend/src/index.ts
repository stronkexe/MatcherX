const express = require('express');
const pool = require('../database/dbConfig')

const app = express();
const PORT = process.env.PORT || 8080;

const authRoutes = require('./Routes/authRouter')

app.use('/', authRoutes)

//app.get('/', async (req: any, res: any) => {
//  try {
//    const client = await pool.connect();
//    const result = await client.query('SELECT * FROM user')
//    client.release();

//    res.json(result.rows);
//  }
//  catch (err) {
//    console.error('Error executing query', err);
//    res.status(500).send('Internal Server Error');
//  }
//});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}..`);
});

