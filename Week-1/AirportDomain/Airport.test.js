const Airport = require('./Airport')
const Plane = require('./Plane')

describe('Test the methods and properties of airport', () => {
    // test('Airport required to have name in string format', () => {
    //     expect(() => new Airport('JFK').name).toBe('string')
    // })

    test('Plane can land', () => {
        let p1 = new Plane('C920')
        let a1 = new Airport('JFK')
        a1.planeLanding(p1)
        expect(a1.planes.length > 0).toBeTruthy()
    })

    test('Plane can take off', () => {
        let p1 = new Plane('A150')
        let a1 = new Airport('JFK')
        let p2 = new Plane('B230')
        let p3 = new Plane('C830')
        a1.planeLanding(p1)
        a1.planeLanding(p3)
        a1.planeLanding(p2)
        a1.planeTakeOff(p1)
        
        expect(a1.planes.includes(p2) && a1.planes.includes(p3)).toBeTruthy()
    })
})