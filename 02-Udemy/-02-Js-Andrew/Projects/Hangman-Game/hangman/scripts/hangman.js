'use strict'

class Hangman {
    constructor(word , remainingGuessus){
        this.word = word.toLowerCase().split('');
        this.remainingGuessus = remainingGuessus;
        this.gusseLetter = []
        this.status = 'playing'
    }
    updateStatus(){
        const finished = this.word.every((letter) => this.gusseLetter.includes(letter) || letter === ' ')

    
        if(this.remainingGuessus === 0){
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get StatusMessage(){
        if(this.status === 'playing'){
            return `Nice try! The word was ${this.word.join('')}`
        } else if (this.status === 'failed'){
            return `Good! You done this word`
        } else {
            return `Guesses left ${this.remainingGuessus}`
        }
    }
    get Puzzle(){
        let puzzle = ''

        this.word.forEach((letter) => {
            if(this.gusseLetter.includes(letter) || letter === ''){
                puzzle += letter
            }else{
                puzzle += '*'
            }
        });
        return puzzle
    }
    makeGuess(guess){
        guess = guess.toLowerCase()
        const unique = !this.gusseLetter.includes(guess)
        const inBadGuess = !this.word.includes(guess)
    
        if(this.status !== 'playing'){
            return 
        }
    
        if(unique){
            this.gusseLetter.push(guess)
        }
    
        if(unique && inBadGuess){
            this.guessedLetters.push(guess)
            this.remainingGuessus--
        }
        this.updateStatus()
    }
}

