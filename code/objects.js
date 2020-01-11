const me = {
  name: 'Andy',
  age: 37,
  favoriteColor: 'blue'
}

console.log(me)
console.log(me.age)

me.favoriteColor = 'magenta'
console.log(me)

me.favoriteAnimal = 'puppy'
console.log(me)

delete me.favoriteColor
console.log(me)
console.log(me.favoriteColor)
