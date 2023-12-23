const pool = require('../../../database/dbConfig.ts')

const ccreateUserTable = async (client: any) => {
  //try {
  // const query = `CREATE TABLE IF NOT EXISTS User (
  //               id SERIAL PRIMARY KEY,
  //           username VARCHAR(150) NOT NULL,
  //             email VARCHAR(150) NOT NULL,
  //         password VARCHAR(150) NOT NULL,
  //             first_name VARCHAR(150) NOT NULL,
  //       last_name VARCHAR(150) NOT NULL,
  //     avatar VARCHAR(150) NOT NULL,
  //               gender BOOLEAN NOT NULL,
  //             biography VARCHAR(100),
  //           created_at TIMESTAMPTZ DAFAULT NOW()
  //       );`
  //   await client.query(query)
  // console.log('User table created successfully')
  //  }
  //catch (err) {
  //   console.error('Error creating User table: ', err)
  //}
}

//module.exports = { ccreateUserTable }
