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

    test('CrewMember must have a position', () => {
        expect(() => new CrewMember('Member', 'FA').position).toBeDefined()
    })


    test('CrewMemebr must have a position', () => {
        expect(() => new CrewMember('Member')).toThrowError('No position given')
    })

    test('Crew must have numeric staff number', () => {
        expect(() => new CrewMember('Member', 'FA')).toThrowError('No Staff number given')
    })


})
