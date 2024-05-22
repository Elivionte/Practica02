import express from "express";

const app = express()

app.get('/',(req, res) => {
    res.send('<h1>Bueena</h1>')
})

app.get('/juancarlos',(req, res) => {
    res.send('<h1>Bueena otra vez</h1>')
})

app.listen(3000)
console.log('server on line', 3000)