const Maintenance = require('./Maintenance')
const Rider = require('./Rider')
const Scooter = require('./Scooter')

class Location {
    constructor(name) {
        this.name = name
        this.readyScooters = []
        this.brokenScooters = []
    }

    addScooter(scooter) {
        scooter.location = this.name
        if (scooter.broken) {
            this.brokenScooters.push(scooter)
        } else {
            this.readyScooters.push(scooter)
        }
    }

    rentOutScooter() {

        return this.readyScooters.pop()
    }

    repairScooters(){
        if (this.brokenScooters.length > 0) {
            for (scooter in this.brokenScooters) {
                Maintenance.markRepaired(scooter)
            }
        }
    }
}

module.exports = Location

let fortyThirdStreet = new Location('43rd Street')
let eric = new Rider('Eric',30)
let scoot1 = new Scooter(undefined , false, true)
let scoot2 = new Scooter(undefined , false, true)
let scoot3 = new Scooter(undefined , false, true)
let scoot4 = new Scooter(undefined , false, true)
let scoot5 = new Scooter(undefined , true, true)
let scoot6 = new Scooter(undefined , true, true)
let scoot7 = new Scooter(undefined , false, true)


// console.log(eric)
// console.log(scoot1)
fortyThirdStreet.addScooter(scoot1)
fortyThirdStreet.addScooter(scoot2)
fortyThirdStreet.addScooter(scoot3)
fortyThirdStreet.addScooter(scoot4)
fortyThirdStreet.addScooter(scoot5)
fortyThirdStreet.addScooter(scoot6)

// console.log('After adding scooter')
console.log(fortyThirdStreet.readyScooters)

eric.rentScooter(fortyThirdStreet.rentOutScooter)

// console.log('after rent out')
// console.log(fortyThirdStreet)
// console.log(eric)
// console.log(scoot1)

// eric.returnScooter(fortyThirdStreet, scoot1, true)
// console.log(fortyThirdStreet)

// console.log(fortyThirdStreet.rentOutScooter())
console.log("Ready Scooters")
console.log(fortyThirdStreet.readyScooters)
console.log('Broken Scooters')
console.log(fortyThirdStreet.brokenScooters)
fortyThirdStreet.repairScooters()
console.log(fortyThirdStreet)