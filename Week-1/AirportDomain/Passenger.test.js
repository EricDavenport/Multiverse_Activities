const Person = require('./Person')
const Bag = require('./Bag')
const Passenger = require('./Passenger')
const Plane = require('./Plane')

describe('Test Passenger objects and methods', () => {
    test('PAssenger inherits from Person', () => {
        expect(() => new Passenger("Some", 8291, 19) instanceof Person).toBeTruthy()
    })

    test('Passenger inherit ability to add bag from Person Class', () => {
        const eric = new Passenger('Eric', 192, 1)
        const b1 = new Bag(19)
        eric.addBag(b1)
        expect(eric.bags.length).toBe(1)
    })

    test('Passenger can board plane', () => {
        const p1 = new Plane('23!DS')
        const pas1 = new Passenger('Eric', 12, 12)
        p1.boardPassenger(pas1)
        expect(p1.passengers.includes(pas1)).toBeTruthy
    })
})