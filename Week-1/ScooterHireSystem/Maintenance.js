const Person = require('./Person')

class Maintenance extends Person {
    constructor(name) {
        super(name, 18)
    }

    repairScooter(scooter) {
        scooter.broken = false
    }
}

module.exports = Maintenance