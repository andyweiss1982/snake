let myAge = 37              // undefined
myAge += 1                  // 38
console.log(myAge)          // 38
myAge = 21                  // 21
console.log(myAge)          // 21

let myName                  // undefined
console.log(myName)         // undefined
myName = "Andy"             // "Andy"
console.log(myName)         // "Andy"

const mySSN = '123-45-6789' // undefined
mySSN = '987-65-4321'       // Uncaught TypeError: Assignment to constant variable.
