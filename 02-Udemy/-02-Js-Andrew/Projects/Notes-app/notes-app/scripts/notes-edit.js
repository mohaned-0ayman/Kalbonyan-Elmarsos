'use strict'

const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElment = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

titleEl.value = note.title
bodyEl .value = note.body
dateElment.textContent = generateLastEdited(note.updatedAt)

titleEl.addEventListener('input' , (e) => {
    note.title = e.target.value
    note.updatedAt === moment().valueOf
    dateElment.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyEl.addEventListener('input' , (e) => {
    note.body = e.target.value
    note.updatedAt === moment().valueOf
    dateElment.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click' , (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage' , (e) => {
    if(e.key === notes){
        notes = JSON.parse(e.newValue)
        note = notes.find( (note) => note.id === noteId)
        
        if (!note) {
            location.assign('/index.html')
        }
        
        titleEl.value = note.title
        bodyEl .value = note.body
        dateElment.textContent = generateLastEdited(note.updatedAt)
    }        
})

// Genarate the last edited message
const generateLastEdited = function (timestamp){
    return `Last edited ${moment(timestamp).fromNow()}`
}
