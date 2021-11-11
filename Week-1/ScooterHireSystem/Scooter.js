class Scooter{
    constructor(location, broken, charged){
        this.location = location
        this.broken = broken
        this.charged = charged
        this.id = Math.random()
        this.rider = ''
        this.paid = true
    }
}

module.exports = Scooter