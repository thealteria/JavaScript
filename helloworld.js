const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(' Hello, World! example'))
app.listen(500, () => console.log('Go on localhost:500 to listen the port'))