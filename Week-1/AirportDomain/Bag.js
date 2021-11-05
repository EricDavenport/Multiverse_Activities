class Bag {
    constructor(weight) {
        // this.weight = weight
        if (weight) {
            this.weight = weight
        } else {
            throw new Error('Bag must have a weight.')
        }
        this.isOverWeight = Boolean
        this.weightCheck(weight)
    }

    weightCheck(weight) {
        if(weight > 75){
            this.isOverWeight = true
        } else {
            this.isOverWeight = false
        }
    }


}

module.exports = Bag

// Bag relationships
// passenger has bag options
// crew member has bag option