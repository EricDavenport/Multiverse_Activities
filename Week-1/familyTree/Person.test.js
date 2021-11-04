// const Person = require('./Person')


const BritishRoyalty = require('./objects')
// const Person = require('./objects')

describe('Person class datatypes', () => {
    // name is of type string
    test('name should be string', () => {
        // create an instance of the class
        const testPerson = new BritishRoyalty('Eric')

        expect(typeof testPerson.name).toBe('string')
    })
})