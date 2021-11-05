const Bag = require('./Bag')

describe('Bags should contain a weight', () => {

    test('Bag should have weight 2', () => {
        const bag = new Bag(19)

        expect(bag.weight).toBeGreaterThan(0)
    })
})