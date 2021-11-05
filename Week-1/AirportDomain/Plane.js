class Plane {
    constructor(type) {
        this.type = type
        this.passengers = []
        this.crewMembers = []
    }

    boardPassenger(passenger) {
        this.passenger.push(passenger)
    }

    boardCrewMember(crewMember) {
        this.crewMembers.push(crewMember)
    }
}

module.exports = Plane
