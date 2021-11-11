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

    // reportBroken(scooter) {
    //     scooter.broken = true
    // }

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



 let rider = new Rider('Eric', 1)
 let rider2 = new Rider('Ghost', 23)
 let rider3 = new Rider('Mike', 1)
 let rider4 = new Rider('Jon', 23)
 let ride5 = new Rider('Miles', 1)
 let rider6 = new Rider('Jones', 23)
 let rider7 = new Rider('Emila', 1)
 let rider8 = new Rider('Gary', 23)
 let rider9 = new Rider('Erin', 1)
 let rider10 = new Rider('Kolie', 23)
 let rider11 = new Rider('Octin', 1)
 let rider12 = new Rider('Dean', 23)
 let rider13 = new Rider('Sledrin', 1)
 let rider14 = new Rider('Gremlin', 23)
 let rider15 = new Rider('SpiderMan', 1)
 let rider16 = new Rider('IronMan', 23)
 let rider17 = new Rider('Hulk', 1)
 let rider18 = new Rider('HawkEye', 23)

//  console.log(rider18)
//  console.log(rider3)
//  console.log(rider15)