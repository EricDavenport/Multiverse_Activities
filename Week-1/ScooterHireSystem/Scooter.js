class Scooter{
    constructor(id, location, broken = false, charged){
        if (id) {
            this.id = id
        } else {
            throw new Error('Scooter requires id for creation')
        }
        this.location = location
        this.broken = broken
        this.charged = charged
        this.id = id
        this.rider = ''
        this.paid = true
    }
}

module.exports = Scooter