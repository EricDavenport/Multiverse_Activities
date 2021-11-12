const { thisExpression } = require('@babel/types')
const Maintenance = require('./Maintenance')
const Rider = require('./Rider')
const Scooter = require('./Scooter')

class Location {
    constructor(name) {
        if (name) {
            this.name = name
        } else {
            throw new Error('Name required')
        }
        this.readyScooters = []
        this.brokenScooters = []
        this.scooters = []
    }

    addScooter(scooter) {
        scooter.location = this.name
        this.scooters.push(scooter)
    }

    rentOutScooter() {
        this.scooters.sort((a, b) => b.broken - a.broken)
        if (this.scooters && this.checkBroken() < this.scooters.length) {
            let scooterToRent = this.scooters.pop()
            return scooterToRent  
        } else {
            throw new Error('No scooters to rent')
        }
        
    }

    checkBroken() {
        let count = 0
        this.scooters.forEach(scoo => {
          if (scoo.broken == true) count += 1 
        })
        return count
    }

    repairScooters() {
        this.scooters.forEach(scoo => {
            if (scoo.broken == true) this.atEachScooter(scoo)
        })
    }

    atEachScooter(currentBroken) {
        const mechanic = new Maintenance("Bob the Builder")
        mechanic.repairScooter(currentBroken)
    }
}

module.exports = Location
