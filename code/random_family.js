const myFam = ['Shelley', 'Naomi', 'Lottie']

function greetRandomFamilyMember(){
  const person = myFam[Math.floor(Math.random() * myFam.length)]
  console.log(`Hi ${person}!`)
}

const greetEverySecond = setInterval(greetRandomFamilyMember, 1000)
clearInterval(greetEverySecond)
