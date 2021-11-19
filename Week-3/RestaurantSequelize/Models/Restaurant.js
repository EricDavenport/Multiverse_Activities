const { db, DataTypes } = require('../db')
const { Model } = require('sequelize')
// const { Menu } = require('./Menu')

class Restaurant extends Model {

}

Restaurant.init({
    name: DataTypes.STRING,
    imagelink: DataTypes.STRING
}, {
    sequelize: db,
    timestamps: false
})

// Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})

module.exports = Restaurant