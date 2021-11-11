const Person = require('./Person')

class Maintenance extends Person {
    constructor(name) {
        super(name, 18)
        this.currentMachine = ''
        this.working = false
    }

    static markRepaired(scooter) {
        scooter.broken = false
    }
}

module.exports = Maintenance