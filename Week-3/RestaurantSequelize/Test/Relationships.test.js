const {db} = require('../db')
const {Menu, MenuItem, Restaurant } = require('../Models/index')

describe('Relationships', () => {
    beforeAll(async () => {
        await db.sync({ force: true });
    })

    test('Restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        const menu = await Menu.create({title: 'Breakfast'})
        await restaurant.addMenus(menu)
        const menus = await restaurant.getMenus()
        expect(menus[0].title).toBe('Breakfast')
    })
})