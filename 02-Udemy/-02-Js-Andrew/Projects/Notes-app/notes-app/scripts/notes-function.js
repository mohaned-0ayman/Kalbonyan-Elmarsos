'use strict'

// const timpstamp = moment().valueOf()

//  Read extisting notes from localStorage
let getSavedNotes = () => {
    const notesJONS = localStorage.getItem('notes')

    try {
        return notesJONS ? JSON.parse(notesJONS) : []
    } catch (e) {
    return []
    }

}

// Save the notes to localStorage
const saveNotes = (notes) => {
localStorage.setItem('notes' , JSON.stringify(notes))
}

// Remove a note from list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if(noteIndex > -1){
        notes.splice(noteIndex , 1)
    }
}


// Generate the DOM Structure for a note
const generatedNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEL = document.createElement('p')
    const statusEl = document.createElement('p')


    if(note.title.length > 0) {
        textEL.textContent = note.title
        } else {
        textEL.textContent = 'Unnamed note'
        textEl.textContent = note.title
        }
        textEL.classList.add('list-item__title')
        noteEl.appendChild(textEL)
        
        // Setup the link
        noteEL.setAttribute('href' , `/edit.html#${note.id}`)
        noteEl.classList.add('list-item')

        // Setup the statusEl message
        statusEl.textContent = generateLastEdited(note.updatedAt)
        statusEl.classList.add('list-item__subtitle')
        noteEl.appendChild(statusEl)

        return noteEl
}

// set your notes by one of three ways
const sortNotes =  (notes , sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0 
            }
        }) 
    } else if(sortBy === 'byCreated') {
        return notes.sort((a ,b ) => {
            if(a.createdAt > b.createdAt){
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a ,b) => {
            if(a.title.toLowerCase() > b.title.toLowerCase()){
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    } 
}

// render application notes
const renderNotes = (notes , filters) => {
    const notesEl = document.querySelector('#notes')
    notes = sortNotes(notes , filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    notesEl.innerHTML = ''

    if(filteredNotes.length >0) {
        filteredNotes.forEach((note) => {
            const noteEl = generatedNoteDOM(note)
            notesEl.appendChild(noteEl)
            })
    }else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'No Notes To Shows'
    emptyMessage.classList.add('empty-message')
    notesEl.appendChild(emptyMessage)
    }
}

// Genarate the last edited massage
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}