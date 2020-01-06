const myFam = ['Shelley', 'Naomi', 'Lottie']

console.log(`There are ${myFam.length} people in my family.`)

function greetRandomPerson(){
  const numFrom0To3 = Math.floor(Math.random() * myFam.length)
  const randomPerson = myFam[numFrom0To3]
  console.log(`Hi ${randomPerson}!`)
}

const greetEverySecond = setInterval(greetRandomPerson, 1000)
clearInterval(greetEverySecond)
