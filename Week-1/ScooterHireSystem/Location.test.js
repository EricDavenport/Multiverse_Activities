const Location = require('./Location')
const Rider = require('./Rider')
const Scooter = require('./Scooter')
const Maintenance = require('./Maintenance')
const { expect, test } = require('@jest/globals')

describe('Test Location class methods and properties', () =>{
    test('Location must have name to be created', () => {
        expect(() => new Location()).toThrowError('Name required')
    })

    test('Location can store non-broken scooters', () => {
        const loc1 = new Location('Bat Corner')
        const scooter = new Scooter('SC1', undefined, false, true)
        loc1.addScooter(scooter)
        expect(loc1.scooters.includes(scooter)).toBeTruthy()
    })

    test('Location can add broken scooters to broken inventory', () => {
        const loc1 = new Location('Rockway Pier')
        const scooter = new Scooter('scoo', undefined, true, false) 
        loc1.addScooter(scooter)
        expect(loc1.scooters.includes(scooter)).toBeTruthy()
    })

    test('Location can rent out scooter', () => {
        const loc = new Location("My house")
        const sco1 = new Scooter('New Scoowfe', undefined, true, true)
        const sco2 = new Scooter('New Scooeewwwww', undefined, false, true)
        const sco3 = new Scooter('New Scoowwwwww', undefined, true, true)
        const sco4 = new Scooter('Ncoo', undefined, false, true)
        const rider = new Rider('Eric', 29)

        loc.addScooter(sco1)
        loc.addScooter(sco2)
        loc.addScooter(sco3)
        loc.addScooter(sco4)
        rider.rentScooter(loc.rentOutScooter())

        expect(rider.scooter == sco4.id && !loc.scooters.includes(sco4)).toBeTruthy()
    })

    test('Location can have maintenance repair broken scooters', () => {
        const loc = new Location('Your spot')
        const broSco1 = new Scooter('Broken 1', undefined, true, true)
        const broSco2 = new Scooter('Broken 2', undefined, true, true)
        const broSco3 = new Scooter('Broken 3', undefined, true, true)
        const broSco4 = new Scooter('Broken 4', undefined, true, true)
        const broSco5 = new Scooter('Broken 5', undefined, true, true)
        const broSco6 = new Scooter('Broken 6', undefined, true, true)
        loc.addScooter(broSco1)
        loc.addScooter(broSco2)
        loc.addScooter(broSco3)
        loc.addScooter(broSco4)
        loc.addScooter(broSco5)
        loc.addScooter(broSco6)

        loc.repairScooters()
        expect(loc.checkBroken()).toBe(0)
    })
})