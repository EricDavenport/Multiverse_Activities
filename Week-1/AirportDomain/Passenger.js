const Bag = require("./Bag")

class Passenger {
    constructor(name, passportNumber, seatNumber) {
        this.name = name
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

module.exports = Passenger

// passenger relationships
// passenger travel with bag -> addBag
// passenger boards a plane -> Plane method -> boardPassenger

let p1 = new Passenger('Eric', 878392382, 32)
let b1 = new Bag(28)
p1.addBag(b1)
console.log(p1.name)
console.log(p1.bags)
