const express = require('express')
const app = express()
const port = 4040

const AnimalCtrl = require('./controllers/Animal')

// creates req.body
app.use(express.json())

app.get('/api/animals', AnimalCtrl.get)
app.post('/api/animals', AnimalCtrl.create)
app.put('/api/animals/:id', AnimalCtrl.update)

app.listen(port, () => {
  console.log('Listening on port', port);
})