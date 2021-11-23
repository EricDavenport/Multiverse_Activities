// express
const express = require('express')
const app = express()
const PORT = 3000

const seed = require('./seed')
const { db } = require('./db')
const { Music } = require('./Models/Music')

// Invoke our seed function
seed()

app.use(express.json())
// ROUTES
// C - Post
app.post('/music', async (req, res) => {
    let newSong = req.body
    await Music.create(newSong)
    res.send('New Song added~')
})

// R - Get
app.get('/music', async (req, res) => {
    let allMusic = await Music.findAll()
    res.json({allMusic})
})

app.get('/music/:id', async (req, res) => {
    let id = req.params.id
    let oneSong = await Music.findByPk(id)
    res.json({oneSong})
})

// U - Put

// D - Delete


app.listen(PORT, () => {
    console.log(`Your server is now listening to port; ${PORT}`)
})