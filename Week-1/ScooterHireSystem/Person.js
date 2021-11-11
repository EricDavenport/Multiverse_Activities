class Person {
    constructor(name, age) {
        if (name) {
            this.name = name
        } else {
            throw new Error('Name required to create account')
        }
        
        if (age) {
            this.age = age
        } else {
            throw new Error('Age required to create account')
        }
    }
}

module.exports = Person

// let eric = new Person('Eric', 2)
// console.log(eric)