const {db} = require('../db')
const {Restaurant} = require('../Models/Restaurant')

describe('Restaurant Test', () => {
    beforeAll(async () => {
        await db.sync({ force: true });
    })

    test('create a restaurant', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        expect(restaurant.id).toBe(1)
    })
})