const path = require('path')
const fs = require('fs').promises

const { db } = require('./db')
const { Restaurant } = require('./Models/index')

const seed = async () => {
    await db.sync({ force: true })

    const seedPath = path.join(__dirname, 'db.json')

    const buffer = await fs.readFile(seedPath)
    const {data} = JSON.parse(String(buffer))
    
    const restaurantPromises = data.map(restaurant => Restaurant.create(restaurant))


    await Promise.all(restaurantPromises) 
    console.log('Restaurant data has been successfully added to the table')
}

module.exports = seed