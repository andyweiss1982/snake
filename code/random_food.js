const allTiles = document.querySelectorAll('.tile')
// undefined

console.log(allTiles)
// NodeList(100) [div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile, div.tile]

const foodTile = allTiles[Math.floor(Math.random() * allTiles.length)]
// undefined

console.log(foodTile)
// <div class="tile" data-tile="5">Tile 5</div>

foodTile.classList.add('food')
// undefined


