const Bag = require('./Bag')

class CrewMember {
    constructor(name, position, staffNumber) {
        this.name = name
        this.position = position
        this.staffNumber = staffNumber
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

module.exports = CrewMember

// Crew member relationshihps
// crew member is allocated to a specific plane
// Crew member had bags

let cm1 = new CrewMember('Eric', 'FA', 920)
let b1 = new Bag(80)
cm1.addBag(b1)
console.log(cm1.bags)