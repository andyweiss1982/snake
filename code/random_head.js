const notFood = document.querySelectorAll('.tile:not(.food)')
// undefined

console.log(notFood)
// NodeList(99) [div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile]

const headTile = notFood[Math.floor(Math.random() * notFood.length)]
// undefined

console.log(headTile)
// <div class="tile" data-tile="32">Tile 32</div>

console.log(headTile.dataset)
// DOMStringMap {tile: "32"}

headTile.dataset.snake = 1
// 1

console.log(headTile.dataset)
// DOMStringMap {tile: "32", snake: "1"}





