// const { test, expect } = require('@jest/globals')
// const { describe } = require('yargs')
const Rider = require('./Rider')
const Scooter = require('./Scooter')
const Location = require('./Location')

describe('Test Scooter properties', () => {
    test('Scooter require id for creation=', () => {
        expect(() => new Scooter()).toThrowError('Scooter requires id for creation')
    })

    test('Scooter should be ridable', () => {

    })

    test('Scooter leaves location and with rider', () => {
        const rider = new Rider("Eric", 18)
        const loc = new Location('Home')
        const scooter = new Scooter('Test', undefined, false, true)
        loc.addScooter(scooter)
        rider.rentScooter(scooter)
        console.log(scooter)
        expect(scooter.rider == rider.name && scooter.location == 'with rider ' + rider.name).toBeTruthy()
    })
})