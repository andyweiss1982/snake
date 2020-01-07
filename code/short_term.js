const overlay = document.querySelector('#overlay')
let snakeLength = 1

function startGame(){
  overlay.classList.add('hidden')

  const allTiles = document.querySelectorAll('.tile')
  const foodTile = allTiles[Math.floor(Math.random() * allTiles.length)]
  foodTile.classList.add('food')

  const notFood = document.querySelectorAll('.tile:not(.food)')
  const headTile = notFood[Math.floor(Math.random() * notFood.length)]
  headTile.dataset.snake = snakeLength
}
