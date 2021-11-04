// Object Literal
let pusheen = {
    name: 'Pusheen',
    age: 16,
    sister: 'Storm'
}

// Create a class named Fruit with flavopr anmd color properties
class Fruit {
    constructor(flavor, color) {
        this.flavor = flavor,
        this.color = color
    }
}

// create a banana
let banana = new Fruit('Tart', 'yellow')

pusheen.age = 17



console.log(banana['color'])

console.log(pusheen.name)

console.log(pusheen.age)

console.log(banana.flavor)