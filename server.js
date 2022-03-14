const express = require('express')
const app = express()
const data = require('./data.json')


app.use(express.json())
app.get('/client', (req, res) => {
    res.json(data)
  })
app.get('/client/:id', (req, res) => {})
app.post('/client', (req, res) => {})
app.put('/client/:id', (req, res) => {})
app.delete('/client/:id', (req, res) => {})


app.listen(3000,() => {
 console.log('server is running');
});