const { db, DataTypes, Model } = require('../db')

class Show extends Model {

}

Show.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    seasons: DataTypes.INTEGER,
    ratings: DataTypes.INTEGER
}, {
    sequelize: db,
    timestamps: false
})

module.exports = {Show}