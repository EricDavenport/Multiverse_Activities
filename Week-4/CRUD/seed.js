// the role of this function is to be able to push our data from our json file into our table, and to add the table into our db
const path = require('path')
const fs = require('fs').promises

// access to our model and db
const { db } = require('./db')
const { Music } = require('./Models/Music')

// define our seed function
const seed = async () => {
    //  clear out table everytime you restar the server
    await db.sync({ force: true })

    // find the path to our json file
    const seedPath = path.join(__dirname, 'music.json')  // holds this path ==>> /usr/local/google/home/edavenportjr/Desktop/Multiverse_Activities/Week-4/CRUD/music.json

    const buffer = await fs.readFile(seedPath)
    const {data} = JSON.parse(String(buffer))
    // [
    //     {"name": "On The Low By: Burna Boy", "genre": "Afro Beats"},
    //     {"name": "Crazy In Love By: Beyonce", "genre": "Dance/Pop"},
    //     {"name": "Hello By: Adele", "genre": "Ballad"}
    // ]

    // will create each row for our Music table
    const musicPromises = data.map(music => Music.create(music))

    await Promise.all(musicPromises)
    console.log('Music data has been successfully populated into our table')

}

// export this seed function 
module.exports = seed