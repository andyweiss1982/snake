const yourScore = document.querySelector('#your-score')

console.log(yourScore) // <span id="your-score">0</span>

yourScore.textContent = 9999

const overlay = document.querySelector('#overlay')

console.log(overlay) // <section id="overlay">...</section>

overlay.classList.add('hidden')
