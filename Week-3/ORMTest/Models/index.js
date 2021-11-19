const  {sequelize} = require('../db')
const {Game} = require('./Games')
const {User} = require('./User')


// Ways to create foreignKey original assigns name to id
User.hasMany(Game)   // sequelize defauls GameId

// User.hasMeny(Game, {foreignKey: 'name'}) // gameId
// User.hasMany(Game, {as: 'prototype'})  // foreign key now called prototype 
// User.hasMany(Game, {gorignKey: 'name', targetKey: 'gamesCollected'})