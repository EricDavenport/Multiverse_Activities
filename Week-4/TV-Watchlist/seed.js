// the role of this function is to be able to push our data from our json file into our table, and to add the table into our db
const path = require('path')
const fs = require('fs').promises

// access to our model and db
const { db } = require('./db')
// const { User } = require('./Models/user')
// const { Show } = require('./Models/show')
const { User, Show } = require('./Models/index')


// define our seed function
const seed = async () => {
    //  clear out table everytime you restar the server
    await db.sync({ force: true })

    // find the path to our json file
    const showSeedPath = path.join(__dirname, 'show.json')  // holds this path ==>> /usr/local/google/home/edavenportjr/Desktop/Multiverse_Activities/Week-4/CRUD/music.json
    const userSeedPath = path.join(__dirname, 'user.json')

    const showBuffer = await fs.readFile(showSeedPath)
    const { showData } = JSON.parse(String(showBuffer))

    const userBuffer = await fs.readFile(userSeedPath)
    const { userData } = JSON.parse(String(userBuffer))

    // will create each row for our Music table
    const userPromises = userData.map(user => User.create(user))
    const showPromises = showData.map(show => Show.create(show))

    await Promise.all(userPromises)
    await Promise.all(showPromises)
    console.log('Tables have been poplulated')

}

// export this seed function 
module.exports = seed