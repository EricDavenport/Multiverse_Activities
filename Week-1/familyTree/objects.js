const { CustomConsole } = require("@jest/console")

// create a class to hold the name and if they have parents
class BritishRoyalty {
    constructor(name) {
        this.name = name
        this.parents = []
    }

    childOf() {
        if (this.parents.length > 0){
            return this.name + "'s parents are " + this.parents.map(parent => {  
                return parent.name
            }).join(' & ')
        } else {
            return "Nobody found :("
        }
    }


    // after creating person -> add parent on following line
    addParent(parent) {
        this.parents.push(parent)
    }
}

let eric = new BritishRoyalty('Eric I')
let ericJr = new BritishRoyalty('Eric')
ericJr.addParent(eric)
console.log(ericJr.childOf())


let homer = new BritishRoyalty('Homer')

let lisa = new BritishRoyalty('Lisa')
lisa.addParent(homer)

console.log(lisa.childOf())

module.exports = BritishRoyalty

// List of Royal Family Members
let kingGeorgeVI = new BritishRoyalty('King George VI')
let queenMother = new BritishRoyalty('Queen Elizabeth')
let countessOfSnowdon = new BritishRoyalty('Princess Margaret')
countessOfSnowdon.addParent(kingGeorgeVI)
countessOfSnowdon.addParent(queenMother)
let dukeOfEdin = new BritishRoyalty('Prince Phillips')
let queenII = new BritishRoyalty('Queen Elizabeth II')
queenII.addParent(kingGeorgeVI)
queenII.addParent(queenMother)
let earlOfWessex = new BritishRoyalty('Prince Edward')
earlOfWessex.addParent(queenII)
earlOfWessex.addParent(dukeOfEdin)
let dukeOfYork = new BritishRoyalty("Prince Andrew")
dukeOfYork.addParent(queenII)
dukeOfYork.addParent(dukeOfEdin)
let princessRoyal = new BritishRoyalty('Anne')
princessRoyal.addParent(queenII)
princessRoyal.addParent(dukeOfEdin)
let princeOfWales = new BritishRoyalty('Charles')
princessRoyal.addParent(queenII)
princessRoyal.addParent(dukeOfEdin)
let duchessOfCornwall = new BritishRoyalty('Camila')
let princessOfWales = new BritishRoyalty('Diana')
let dukeOfCambridge = new BritishRoyalty('Prince William')
dukeOfCambridge.addParent(princessOfWales)
dukeOfCambridge.addParent(princessOfWales)
let duchessOfCambridge = new BritishRoyalty('Catherine')
let princeGeorge = new BritishRoyalty('Prince George of Cambridge')
princeGeorge.addParent(duchessOfCambridge)
princeGeorge.addParent(dukeOfCambridge)
let princessCharlotte = new BritishRoyalty('Princess Charlotte of Cambridge')
princessCharlotte.addParent(duchessOfCambridge)
princessCharlotte.addParent(dukeOfCambridge)
let princeLouis = new BritishRoyalty('Prince Louis of Cambridge')
princeLouis.addParent(duchessOfCambridge)
princeLouis.addParent(dukeOfCambridge)
let dukeOfSussex = new BritishRoyalty('Prince Harry')
let duchessOfSussex = new BritishRoyalty('Meghan')
let archieHarrison = new BritishRoyalty('Archie Harrison Mountbatten-Windsor')
archieHarrison.addParent(dukeOfSussex)
archieHarrison.addParent(duchessOfSussex)

console.log(archieHarrison.childOf())