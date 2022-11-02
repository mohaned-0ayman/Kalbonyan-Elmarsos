'use strict'

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guess')
let game1 


const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle , 5)
    render()
}

const render = () =>{
    puzzleEl.innerHTML = ''
    guessEl.textContent = game1.StatusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    });
}


document.querySelector('#reset').addEventListener('click' , startGame)


// Generate SPAN Dom
const generateSpanDOM = async () => {
    
}
startGame()
generateSpanDOM()

// getPuzzle('2').then((puzzle) =>{
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((puzzle) =>{
//     console.log(country.name)
// }).catch((error)=>{
//     console.log(error)
// })

// getLocation().then((location) =>{
//     return getCountry(location.country)
// }).then((country)=>{
//     console.log(country.name)
// }).catch((err) =>{
//     console.log(`Error: ${err}`)
// })
