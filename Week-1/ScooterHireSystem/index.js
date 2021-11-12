const readline = require('readline')
const Location = require('./Location')
const Maintenance = require('./Maintenance')
const Rider = require('./Rider')
const Scooter = require('./Scooter')



const stations = [  
    fourthStreet = new Location('Fourth Street Stop'),
    coffeStop = new Location('Corner Breakfeast Stop'),
    thirdStreet = new Location('Third Street Stop'),
]

// generateScooters() {
//     for (let i = 0; i < 45; i ++) {
//         console.log(2)
//     }
// }

let scooters = [
    sco0 = new Scooter('sco0', undefined, true, true),
    sco1 = new Scooter('sco1', undefined, false, true),
    sco2 = new Scooter('sco2', undefined, true, true),
    sco3 = new Scooter('sco3', undefined, false, true),
    sco4 = new Scooter('sco4', undefined, false, true),
    sco5 = new Scooter('sco5', undefined, false, true),
    sco6 = new Scooter('sco6', undefined, true, true),
    sco7 = new Scooter('sco7', undefined, false, true),
    sco8 = new Scooter('sco8', undefined, false, true),
    sco9 = new Scooter('sco9', undefined, true, true),
    sco10 = new Scooter('sco10', undefined, false, true),
    sco11 = new Scooter('sco11', undefined, true, true),
    sco12 = new Scooter('sco12', undefined, false, true),
    sco13 = new Scooter('sco13', undefined, true, true),
    sco14 = new Scooter('sco14', undefined, false, true),
    sco15 = new Scooter('sco15', undefined, false, true),
    sco16 = new Scooter('sco16', undefined, true, true),
    sco17 = new Scooter('sco17', undefined, false, true),
    sco18 = new Scooter('sco18', undefined, false, true),
    sco19 = new Scooter('sco19', undefined, true, true),
    sco20 = new Scooter('sco20', undefined, false, true),
    sco21 = new Scooter('sco21', undefined, false, true),
    sco22 = new Scooter('sco22', undefined, false, true),
    sco23 = new Scooter('sco23', undefined, false, true),
    sco24 = new Scooter('sco24', undefined, false, true),
    sco25 = new Scooter('sco25', undefined, false, true),
    sco26 = new Scooter('sco26', undefined, true, true),
    sco27 = new Scooter('sco27', undefined, false, true),
    sco28 = new Scooter('sco28', undefined, false, true),
    sco29 = new Scooter('sco29', undefined, false, true),
    sco30 = new Scooter('sco30', undefined, false, true),
    sco31 = new Scooter('sco32', undefined, false, true),
    sco32 = new Scooter('sco32', undefined, true, true),
    sco34 = new Scooter('sco34', undefined, false, true),
    sco35 = new Scooter('sco35', undefined, true, true),
    sco36 = new Scooter('sco36', undefined, false, true),
    sco37 = new Scooter('sco37', undefined, true, true),
    sco38 = new Scooter('sco38', undefined, false, true)
]

let i = 0
do {
    if (i % 3 == 0) {
        thirdStreet.addScooter(scooters[i])
    } else if (i % 2 == 0) {
        scooters[i].broken = true
        coffeStop.addScooter(scooters[i])
    } else {
        fourthStreet.addScooter(scooters[i])
    }
    i++
} while (i < scooters.length)


// console.log('Coffee Stop', coffeStop.scooters.length)
// console.log('Coffee Stop', coffeStop.scooters)

// console.log('Fourth: ',fourthStreet.scooters.length)
// console.log('Fourth: ',fourthStreet.scooters)

// console.log('third: ',thirdStreet.scooters.length)
// console.log('third: ',thirdStreet.scooters)

// const name = prompt('Hello! What is your name?')
// const age = prompt('How old Are You?')
// const rider = new Rider(name, age)
// console.log('Welcome ', rider.name)

const eric = new Rider('Eric', 30)

console.log('\nNew rider', eric.name, '. Welcome!!\n')


console.log('Select a station:\n  1-', coffeStop.name, '\n  2-', fourthStreet.name, '\n  3-', thirdStreet.name)

console.log('You selected', coffeStop.name)
console.log('Scooters available are:\n', coffeStop.scooters)
console.log('OHHH!!! looks like all of the scooters are broken!!\nPlease Select a new location or report scooters broken for repair.\n-Management\n')
console.log('Choose an option:\n  1-', coffeStop.name, '\n  2-', fourthStreet.name, '\n  3-', thirdStreet.name, '\n  4- Report Broken')
console.log('You selected report broken...One moment please')
console.log('...')
console.log('...')
console.log('...')
console.log('...')
console.log('...')
console.log('...')
coffeStop.repairScooters()
console.log('Scooters available at', coffeStop.name, ' are...\n\n', coffeStop.scooters)
console.log('Please select a scooter')
console.log('You selected', sco4.id )

eric.rentScooter(sco4)

console.log(eric.name, 'rode to', fourthStreet.name, 'charging station.\nWhere he returned', sco4.id)

eric.returnScooter(fourthStreet, sco4, true)
console.log('The scooter broke upon arrival so they returned it and said it was broken\nLets confirm')
console.log(fourthStreet.scooters)
console.log('Scooters has been returned, paid for, and set to broken.')

// const nameQ = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let name , age
// nameQ.question("What is your name? ", function (answer) {
//     name = answer
//   console.log(`Oh, so your name is ${answer}`);
//   console.log("Closing the interface");
//   nameQ.close();
// });

// const ageQ = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

// ageQ.question("What is your age? ", function (answer) {
//     age = answer
//     // console.log(`Oh, so your name is ${answer}`);
//     // console.log("Closing the interface");
//     ageQ.close();
//   });

// let newRider = new Rider(name, age)
// console.log(newRider)