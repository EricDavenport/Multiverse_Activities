const Bag = require('./Bag')

describe('Bags should contain a weight', () => {

    test('Bag should have weight', () => {
        expect(() => new Bag()).toThrowError('Bag must have a weight.')
    })

    test('Bag is overweight', () => {
        expect(() => new Bag(99).isOverWeight).toBeTruthy()
    })
})