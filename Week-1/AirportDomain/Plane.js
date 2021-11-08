class Plane {
    constructor(type) {
        this.type = type
        this.destination = ''
        this.origin = ''
        this.passengers = []
        this.crewMembers = []
    }

    boardPassenger(passenger) {
        this.passengers.push(passenger)
    }

    boardCrewMember(crewMember) {
        this.crewMembers.push(crewMember)
    }
}

module.exports = Plane


// planes needs indicator of origin and destination locations