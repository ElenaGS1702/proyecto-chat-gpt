const express = require('express')
const app = express()
const port = 8080

app.get8('/', (req, res) => {
    res.send('Hola Mundo')
})

app.listen(port, () => {
    console.log(`App escuchando en el puerto: ${port}`)
})