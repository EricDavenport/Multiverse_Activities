// const Person = require('./Person')


const BritishRoyalty = require('./objects')
// const Person = require('./objects')

describe('Person class datatypes', () => {
    // name is of type string
    test('Name should be string', () => {
        // create an instance of the class
        const testPerson = new BritishRoyalty('Eric')

        expect(typeof testPerson.name).toBe('string')
    })

    test('Parents should be type [BritishRoyalty]', () => {
        const testPerson = new BritishRoyalty('Eric')
        const testParent = new BritishRoyalty("Gerry")
        testPerson.addParent(testParent)

        expect(typeof testPerson.parents[0] === BritishRoyalty)
    })
})
