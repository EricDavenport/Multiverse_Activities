const { Game } = require('../../ORMTest/Models/Games')
const { db, DataTypes, Model } = require('../db')

class Restaurant extends Model {

}

Restaurant.init({
    name: DataTypes.STRING,
    imagelink: DataTypes.STRING
}, {
    sequelize: db,
    timestamps: false
})

module.exports = { Restaurant }