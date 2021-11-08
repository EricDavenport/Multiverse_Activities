const Airport = require('./Airport')
const Person = require('./Person')
const Bag = require('./Bag')
const Passenger = require('./Passenger')
const Plane = require('./Plane')
const CrewMember = require('./CrewMember')

describe('Test Plane object methods and properties', () => {
    test('test plane can load passanger', () => {
        const pas1 = new Passenger('Eric', 123, 123)
        const plane = new Plane('nd2')
        plane.boardPassenger(pas1)

        expect(plane.passengers.includes(pas1)).toBeTruthy()
    })

    test('test plane can load crew member', () => {
        const cm1 = new CrewMember('Eric', 123, 123)
        const plane = new Plane('nd2')
        plane.boardCrewMember(cm1)

        expect(plane.crewMembers.includes(cm1)).toBeTruthy()
    })

    test('test plane can land at air port', () => {
        const ap = new Airport('GSO')
        const pl = new Plane('D344')
        ap.planeLanding(pl)
        console.log(pl.destination)
        console.log(ap.name)
        expect(pl.destination).toBe(ap.name)
    })
    
    // test('test plane can take off from airpoirt', () => {
        
    // })
    
    // test('test plane can load bags', () => {
        
    // })
    
})