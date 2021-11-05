class Airport {
    constructor(name) {
        this.name = name
        this.planes = []
    }

    planeLanding(plane) {
        this.planes.push(plane)
    }

    planeTakeOff() {
        this.planes.pop
    }
}

module.exports = Airport

// Airports relationships
// planes land at -> planeLanding
// planes take off from -> planeTakeOff