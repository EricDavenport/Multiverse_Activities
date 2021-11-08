class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    static checkName(name){
        return (typeof name === 'string') ? true : false
    }
}

const tony = new Person('Tony', 25)

console.log(Person.checkName('tony'))

