const { db, DataTypes, Model } = require('../db')
const { Restaurant } = require('./Restaurant')

class Menu extends Model {
    
}

Menu.init({
    title: DataTypes.STRING
}, {
    sequelize: db,
    timestamps: false
})

// Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})

module.exports = Menu