const express = require('express')
const app = express()
const { db } = require('./db')

const PORT = 3000
const { User, Show } = require('./Models/index')
const seed = require('./seed')

app.use(express.json())

seed()

// A route that will display all the shows that the user has watched.
// A route that can create a user and show.
// A route that will ‘rate’ a show that you have already watched.
// A route that will ‘update’ a show if they include more seasons.
// A route that will ‘remove’ a show if the series gets cancelled.


// A route that will display all the shows.
app.get('/shows', async (req, res) => {
    let allShows = await Show.findAll()
    res.json({allShows})
})

// A route that will display all the users.
app.get('/users', async (req, res) => { 
    let allUsers = await User.findAll()
    res.json({allUsers})
})

app.get('user/:id', async (req, res) => {
    let id = req.params.id
    let user = await User.findByPk(id)
    res.json({user})
})

app.get('/users/:id/shows', async (req, res) => {
    let id = req.params.id
    let user = await User.findByPk(id)
    const show = await Show.findAll({
        where: {
            "UserId": id
        }
    })
    // Show.crea
    res.json(show)
})

// A route that will ‘add’ a show if you have watched it.
app.post('/users', async (req, res) => {
    const newUser = {
        name: req.body.name
    }
    let user = await User.create(newUser)
    res.send('New user added`').json({user})
})

app.post('/shows', async (req, res) => {
    const newShow = {
        name: req.body.name,
        genre: req.body.genre,
        seasons: req.body.seasons,
        ratings: req.body.ratings
    }
    let show = await Show.create(newShow)
    res.send('New Show added`').json({show})
})

app.put('/users/:id', async (req, res) => {
    let id = req.params.id
    const user = User.findByPk(id)
    const show = await Show.findOrCreate({
        where: { name: req.body.name}
    })
    if (!show.UserId) {
        await user.addShow(newShow)
    }
    res.send('Show has been added')
})

app.put('/shows/:id', async (req, res) => {
    let id = req.params.id
    const show = await Show.findByPk(id)
    const updateShow = await show.update(req.body)
    if (updateShow) {
        req.status(200).send('Show has been updated')
    }
})

app.delete('/shows/:id', async (req, res) => {
    let id = req.params.id
    let show = await Show.findByPk(id)
    await show.destroy()
    req.status(201).send('Show has been deleted')
    
})




app.listen(PORT, () => {
    console.log(`Your server is now listenig to port: ${PORT}`)
})
