const Restaurant = require('./Restaurant')
const Menu = require('./Menu')
const MenuItem = require('./MenuItem')

Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})

Menu.hasMany(MenuItem)
MenuItem.belongsTo(Menu)

module.exports = { Restaurant, Menu, MenuItem }