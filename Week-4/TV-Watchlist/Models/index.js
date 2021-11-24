const { User } = require('./user')
const { Show } = require('./show')

User.hasMany(Show, {as: 'shows'} )
// User.belongsTo(Show, {as: 'Show - to', foreignKey: })
Show.belongsTo(User)

module.exports = { User, Show }