const CrewMember = require('./CrewMember')
const Bag = require('./Bag')
const Plane = require('./Plane')

describe('Crew Member Class Test', () => {
    
    test('CrewMember must have name', () => {
        expect(() => new CrewMember()).toThrowError('No Name added')
    })

    test('CrewMember name must be a string', () => {
        expect(() =>  new CrewMember(234, 123, 2)).toThrowError('Names must be String format')
    })

    test('CrewMemebr must have a position', () => {
        expect(() => new CrewMember('Member').position).toBeDefined()
    })


})
