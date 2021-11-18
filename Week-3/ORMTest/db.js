const {Sequelize, DataTypes, Model} = require('sequelize')

// create an instance of the Sequelize class
const db = new Sequelize('database', 'username', 'password', {
    // what kind of database are you using?
    dialect: 'sqlite',
    // the name of the file of your database
    storage: 'games.sqlite',
    // terminal will be flooded with information
    logging: false
})

// export 
// Must exxport datatypes and m odels -> every class extends Model
module.exports = {db, DataTypes, Model}