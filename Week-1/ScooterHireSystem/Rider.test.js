const Rider = require('./Rider')
const Person = require('./Person')

describe('Test Rider class properties and methods', () => {
    test("this should just pass", () => {
        expect(2).toBe(2)
    })

    test('rider should be instance of person', () => {
        const rider = new Rider('Eric', 28)
        expect(rider instanceof Person).toBeTruthy()
    })

    test('Rider os too young to ride scooter', () => {
        const rider = new Rider('Emily', 3)
        expect(rider.payment).toBeFalsy()
    })

    test('Rider can rent scooter', () => {
        
    })
})