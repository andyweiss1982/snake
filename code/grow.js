const overlay = document.querySelector('#overlay')
let snakeLength = 1
let direction = ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 4)]
let snakeSlither = undefined

function move(){
  let headTile = document.querySelector('[data-snake="1"]')
  let headPosition = Number(headTile.dataset.tile)
  if (direction === 'up'){
    headPosition -= 10
    if (headPosition < 1) { headPosition += 100 }
  }
  if (direction === 'down'){
    headPosition += 10
    if (headPosition > 100) { headPosition -= 100 }
  }
  if (direction === 'left'){
    headPosition -= 1
    if (headPosition % 10 === 0) { headPosition += 10 }
  }
  if (direction === 'right'){
    headPosition += 1
    if (headPosition % 10 === 1) { headPosition -= 10 }
  }
  const foodTile = document.querySelector('.food')
  const foodPosition = Number(foodTile.dataset.position)
  delete headTile.dataset.snake
  headTile = document.querySelector(`[data-tile="${headPosition}"]`)
  headTile.dataset.snake = 1
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
