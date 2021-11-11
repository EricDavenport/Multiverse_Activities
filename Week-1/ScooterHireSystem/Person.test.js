const Person = require('./Person')

describe('Test Person properties and methods', () => {
    test('Person requires age to create', () => {
        expect(() => new Person('Eric')).toThrowError('Age required to create account')
    })

    test('Person requires name to create', () => {
        expect(() => new Person()).toThrowError('Name required to create account')
    })
})