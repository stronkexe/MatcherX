const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello matcha!')
})

app.listen(port, () => {
    console.log(`listining on port ${port}..`)
})
