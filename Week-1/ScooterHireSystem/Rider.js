const Person = require('./Person')

class Rider extends Person {
    constructor(name, age, payment = false) {
        super(name, age)
        this.payment = payment
        this.scooter = ''
        this.id = Math.random()
        this.isUserOldEnough()
    }

    isUserOldEnough(){
        this.payment = this.age >= 18 ? true : false
    }

    rentScooter(scooter) {
        this.scooter = scooter.id
        scooter.location = 'with rider ' + this.name
        scooter.rider = this.name
    }

    returnScooter(location, scooter, broken) {
        scooter.broken = broken
        scooter.paid = true
        scooter.rider = ''
        location.addScooter(scooter)
    }
}

 module.exports = Rider


