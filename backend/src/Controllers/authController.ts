const express = require('express')
const pool = require('../../database/dbConfig')
const bcrypt = require('bcrypt')
//const { createUserTable } = require('../Models/users/User.ts')
//const { check, validationResult } = require('express-validator')


const login = async (req: any, res: any) => {

  try {
    const { email, password } = req.body
    const client = await pool.connect();
    const user = await client.query('SELECT * FROM "User" WHERE email=$1;', [email])
    console.log('user: ', user.rows)
    if (user.rows.length > 0) {
      const isPassValid = await bcrypt.compare(user.rows[0].password, password)
      console.log('bcrypt result: ', isPassValid)
      if (isPassValid === true)
        return res.status(200).send({ user })
    }
    res.status(401).send({ 'invalid user': user });
    client.release()
  }
  catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
};

const users = [
  {
    email: "stronk@test.ma",
    password: "pass1234",
  }
]


const createUserTable = async (client: any) => {
  try {
    const createTableQuery = `
            CREATE TABLE IF NOT EXISTS "User" (
                id SERIAL PRIMARY KEY,
                username VARCHAR(150) NOT NULL,
                email VARCHAR(150) NOT NULL,
                password VARCHAR(200) NOT NULL,
                first_name VARCHAR(150) NOT NULL,
                last_name VARCHAR(150) NOT NULL,
                avatar VARCHAR(150) NOT NULL,
                gender BOOLEAN NOT NULL,
                biography VARCHAR(100),
                created_at TIMESTAMPTZ DEFAULT NOW()
            )
        `;

    await client.query(createTableQuery);
    console.log('User table created successfully');
  } catch (err) {
    console.error('Error creating User table:', err);
    throw err;
  }
};

const signup = async (req: any, res: any) => {
  const { email, password, username, first_name, last_name, avatar, gender } = req.body;

  // Check if the user already exists in your database

  const hashedPass = await bcrypt.hash(password, 10);

  const client = await pool.connect();

  try {
    await createUserTable(client);

    const insertUserQuery = `
            INSERT INTO "User" (username, email, password, first_name, last_name, avatar, gender)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;

    const result = await client.query(insertUserQuery, [
      username,
      email,
      hashedPass,
      first_name,
      last_name,
      avatar,
      gender,
    ]);

    console.log('User created successfully');
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating user' });
  } finally {
    client.release();
  }
};

//module.exports = { signup };


const sssignup = async (req: any, res: any) => {

  const { email, password, username, first_name, last_name, avatar, gender } = req.body
  //const error = validationResult(req)

  //if (!error.isEmpty())
  // return res(400, { error: error.array() })

  // to implement validation server side later :)

  const user = users.find((u) => { return u.email === email })

  if (user)
    return res.status(400).json({ 'error': `user ${email} already exist!` })

  const hashedPass = await bcrypt.hash(password, 10)
  console.log(email, password, hashedPass, username, first_name, last_name, avatar, gender)
  //users.push({ email: email, password: hashedPass })
  const client = await pool.connect()
  try {
    //await createUserTable(client)

    const q = 'CREATE TABLE IF NOT EXISTS "Users" (\
              id SERIAL PRIMARY KEY,\
              username VARCHAR(150) NOT NULL,\
              email VARCHAR(150) NOT NULL,\
              password VARCHAR(200) NOT NULL,\
              first_name VARCHAR(150) NOT NULL,\
              last_name VARCHAR(150) NOT NULL,\
              avatar VARCHAR(150) NOT NULL,\
              gender VARCHAR(150) NOT NULL,\
              biography VARCHAR(100)\
        );'
    //const q = '';
    await client.query(q);
    const result = await client.query('INSERT INTO "Users" (username, email, password, first_name, last_name, avatar, gender) VALUES ($1, $2, $3, $4, $5, $6, $7);', [email, hashedPass, username, first_name, last_name, avatar, gender])
    console.log('user created')
    res.send(result.rows)
  }
  catch (err) {
    console.error(err)
  }
  //res.send(result.rows)
  client.release()
}
module.exports = { login, signup }
