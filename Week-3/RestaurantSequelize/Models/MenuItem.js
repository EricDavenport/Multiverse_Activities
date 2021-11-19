const { db, DataTypes, Model } = require('../db')

class MenuItem extends Model {

}

MenuItem.init({
    // id is not required - will populate with id ??
    // id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.STRING
},{
    sequelize: db,
    timestamps: false
})

module.exports = MenuItem