const CrewMember = require('./CrewMember')
const Bag = require('./Bag')
const Plane = require('./Plane')
const Passenger = require('./Passenger')
const Person = require('./Person')

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

    test('Crew Member isInstance of Person', () => {
        const jamie = new CrewMember('Jamie', 'FA', 102)
        expect(jamie instanceof Person).toBeTruthy()
    })

    test('Crew member inherited addBag method', () => {
        const bag = new Bag(20)
        const jamie = new CrewMember('Jamie', 'FA', 102)
        jamie.addBag(bag)
        expect(jamie.bags.length).toBe(1)
    })

    test('Crew Member canboard plane', () => {
        const cristin = new CrewMember('Cristin', "FA", 122)
        const plane = new Plane('DF@321')
        plane.boardCrewMember(cristin)
        expect(plane.crewMembers.includes(cristin)).toBeTruthy()
    })


})
