const myFam = ['Shelley', 'Naomi', 'Lottie']   // undefined

myFam[0]                                      // 'Shelley'
myFam[1]                                      // 'Naomi'
myFam[2]                                      // 'Lottie'

myFam.forEach(function(familyMember){
  console.log(`I love you ${familyMember}!`)
})

// I love you Shelley!
// I love you Naomi!
// I love you Lottie!
