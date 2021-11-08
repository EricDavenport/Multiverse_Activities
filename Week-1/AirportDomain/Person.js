class Person {
    constructor(name) {
        if (name && typeof name == 'string') {
            this.name = name
        } else if(name && typeof name != 'string') {
            throw new Error('Names must be String format')
        } else {
            throw new Error('No Name added')
        }
        
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

module.exports = Person