const {db} = require('../db')
const {MenuItem} = require('../Models/MenuItem')

describe('Menu Item Test', () => {
    beforeAll(async () => {
        await db.sync({ force: true });
    })

    test('Create a menu Item', async () => {
        const newItem = await MenuItem.create({name: 'Spaghetti', price: 25})
        expect(newItem.price).toBe(25)
    })
})