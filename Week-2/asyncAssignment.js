

// pause(tim {
//     return new Promise(resolve => {
//         setTimeout(resolve, time)
//     })
// }

// printWithDelay(arr, delay) {
//      // inside print with delay - we take an array and iterate to print one object at a time
//      // when looking at each element, print, the pause
//      // 
//      // Create a function printWithDelay(arr, delay) which prints each element of an array, pausing 
//      // for the specified delay between each console.log. You wll find the pause function below useful, 
//      // whe)ich returns a promise resolving after the given amount of time.

//     arr.forEach(element => {
//         let promise = pause(delay)
//         promise.then(() => {
//             console.log(element)
//         })
//     })

// }
// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// printWithDelay(test, 1000)