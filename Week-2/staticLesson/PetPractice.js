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

}

// let pet = new Pet("King J", 'dog')

console.log(Pet.checkPrefix('Queen J'))
console.log(Pet.checkType('ghost'))
console.log(Pet.checkType('cat'))
