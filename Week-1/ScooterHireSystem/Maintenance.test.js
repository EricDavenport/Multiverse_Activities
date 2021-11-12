const Maintenance = require('./Maintenance')
const Person = require('./Person')
const Scooter = require('./Scooter')

describe('Test the maintenance class methods and properties', () => {
    test('Maintenance inherits from Person class', () => {
        const repair = new Maintenance('Mitch')
        expect(repair instanceof Person).toBeTruthy()
    })

    test('Maintenance should be able to reppair broken scooters', () => {
        const scooter = new Scooter('scoot', undefined, true, true)
        const repair = new Maintenance('Jill')
        repair.repairScooter(scooter)
        expect(scooter.broken).toBeFalsy()
    })
})