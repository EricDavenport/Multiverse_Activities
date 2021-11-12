const Rider = require('./Rider')
const Person = require('./Person')
const Location = require('./Location')
const Scooter = require('./Scooter')
const { test, expect } = require('@jest/globals')

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
        const loc = new Location('Forty 3rd')
        const scoo = new Scooter('Scooter 1', undefined, false, true)
        loc.addScooter(scoo)
        const rider = new Rider('Eric', 28)
        rider.rentScooter(scoo)
        expect(rider.scooter == scoo.id && scoo.rider == rider.name).toBeTruthy()
    })

    test('Rider can return scooter', () => {
        const loc = new Location('Forty 3rd')
        const scoo = new Scooter('Scooter 1', undefined, false, true)
        loc.addScooter(scoo)
        const rider = new Rider('Eric', 28)
        rider.rentScooter(scoo)
        rider.returnScooter(loc, scoo, false)
        expect(loc.scooters.includes(scoo)).toBeTruthy()
    })
})