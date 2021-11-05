class CrewMember {
    constructor(name, position, staffNumber) {
        if (name && typeof name == 'string') {
            this.name = name
        } else if(name && typeof name != 'string') {
            throw new Error('Names must be String format')
        } else {
            throw new Error('No Name added')
        }

        // if (position) {
        //     this.position = position
        // } else {
        //     throw new Error('No position given')
        // }

        
        this.staffNumber = staffNumber
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

module.exports = CrewMember

// Crew member relationshihps
// crew member is allocated to a specific plane -> plane addCrewMember
// Crew member has bags -> addBags
