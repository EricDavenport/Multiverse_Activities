const Plane = require('./Plane')

class Airport {

    static airports = []

    constructor(name) {
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
    }

    planeLanding(plane) {
        if (plane.origin != this.name) {
            plane.destination = this.name
        }
        // plane.destination = this.name
        this.planes.push(plane)
    }

    // figutre out how to remove exact plane from list without iteration
    planeTakeOff(plane) {
        // this.planes.pop
        plane.origin = this.name
        let index = this.planes.indexOf(plane)
        this.planes.splice(index, 1)
    }
}

module.exports = Airport

// Airports relationships
// planes land at -> planeLanding
// planes take off from -> planeTakeOff

// what is necessary for planes to switch locations
// origin location
// destination location
// airport must have access to store planes planes = []