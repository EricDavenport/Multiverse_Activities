const Bag = require('./Bag')
const Person = require('./Person')

class CrewMember extends Person {
    constructor(name, position, staffNumber) {
        super(name)
        if (position) {
            this.position = position
        } else {
            throw new Error('No position given')
        }

        this.staffNumber = staffNumber
    }
}

module.exports = CrewMember

// Crew member relationshihps
// crew member is allocated to a specific plane -> plane addCrewMember
// Crew member has bags -> addBags

// const memberee = new CrewMember('Sjams', "FA", 123)
// const bag1 = new Bag(22)
// memberee.addBag(bag1)
// console.log(memberee.bags)