const overlay = document.querySelector('#overlay')
let snakeLength = 1
let direction = ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 4)]
let snakeSlither = undefined

function move(){
  console.log(`The snake wants to move ${direction}!`)
}

function startGame(){
  overlay.classList.add('hidden')

  const allTiles = document.querySelectorAll('.tile')
  const foodTile = allTiles[Math.floor(Math.random() * allTiles.length)]
  foodTile.classList.add('food')

  const notFood = document.querySelectorAll('.tile:not(.food)')
  const headTile = notFood[Math.floor(Math.random() * notFood.length)]
  headTile.dataset.snake = snakeLength

  snakeSlither = setInterval(move, 400)
}

document.addEventListener('keyup', function(event){
  if (event.key === 'ArrowUp')    { direction = 'up' }
  if (event.key === 'ArrowDown')  { direction = 'down' }
  if (event.key === 'ArrowLeft')  { direction = 'left' }
  if (event.key === 'ArrowRight') { direction = 'right' }
})
