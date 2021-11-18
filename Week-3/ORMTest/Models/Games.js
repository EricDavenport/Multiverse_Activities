const { db, DataTypes, Model } = require('../db') // require our db plus datatype andmodel from db file

class Game extends Model {
    
}


// we need to create columns from our table

Game.init({
    name: DataTypes.STRING,
    platform: DataTypes.STRING

}, {
    // let's sequelize know where your tables will be stored
    sequelize: db
})

// export
module.exports = { Game }