class Pet{
    constructor(name, type){
        this.name = name
        this.type = type
    }


    // first static is to check the type of the animal -> must be dog, cat, bird or fish
    static checkType(type) {
        const validPets = ['dog', 'cat', 'bird', 'fish']
        return validPets.includes(type)
    }

    // MARK: Why isn't this returning correctly
    // static checkType(type) {
    //    return (type === 'dog' || 'cat' || 'bird' || 'fish') ? true : false
    // }




    // second static is name must have kind or queen in the front of it
    // check that the given name holds the characters 'KING' or 'QUEEN' in it
    static checkPrefix(name){
        const king = name.startsWith('King')
        const queen = name.startsWith('Queen')
        return king || queen == true
    }

    // in class version
    // static checkName2(name){
    //     // find the index of the dash
    //     const indexOfDash = name.indexOf('-')
    //     // grab the chars from 0 to the dash
    //     const prefix = name.slice(0, indexOfDash + 1)
    //     let prefixCheck
    //     let firstLetterOfName = name[indexOfDash + 1] === name[indexOfDash + 1].toUpperCase()

    //     if(prefix === 'King-' || 'Queen-'){
    //         prefixCheck = true
    //     } else {
    //         prefixCheck = false
    //     }

    //     if (prefixCheck && firstLetterOfName) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

}

// let pet = new Pet("King J", 'dog')

console.log(Pet.checkPrefix('Queen J'))
console.log(Pet.checkType('ghost'))
console.log(Pet.checkType('cat'))
// console.log(Pet.checkName2(''))
