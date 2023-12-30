const express = require('express');
const pool = require('../database/dbConfig')
const cors = require('cors')
const app = express();

app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));


const PORT = process.env.PORT || 8080;

const authRoutes = require('./Routes/authRouter')
const usersRoutes = require('./Routes/usersRouter')

app.use('/auth', authRoutes)
app.use('/api/users', usersRoutes)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}..`);
});

