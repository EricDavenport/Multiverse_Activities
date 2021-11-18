const { db, DataTypes, Model } = require('../db')

class User extends Model {

}

User.init({
    username: DataTypes.STRING,
    gamesaCollected: DataTypes.STRING
}, {
    sequelize: db
})

modules.exports = { User }