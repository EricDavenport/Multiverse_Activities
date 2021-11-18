const {db} = require('../db')
const {Menu} = require('../Models/Menu')

describe('Menu Test', () => {
    beforeAll(async () => {
        await db.sync({ force: true });
    })

    test('Create new Menu', async () => {
        const newMenu = await Menu.create({title: 'Breakfast'})
        expect(newMenu.id).toBe(1)
    })
})