const { db, DataTypes, Model } = require('../db')

class Menu extends Model {
    
}

Menu.init({
    title: DataTypes.STRING
}, {
    sequelize: db,
    timestamps: false
})

module.exports = { Menu }