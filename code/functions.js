function headsOrTails(){
  const randomNum = Math.random()

  if (randomNum > 0.5){
    console.log("Heads I win!")
  } else {
    console.log("Tails you lose!")
  }

  console.log(`The number was ${randomNum}`)
}

headsOrTails()
headsOrTails()
headsOrTails()

const flipEverySecond = setInterval(headsOrTails, 1000)
clearInterval(flipEverySecond)
