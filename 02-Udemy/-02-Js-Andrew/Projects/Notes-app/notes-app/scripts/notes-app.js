'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes , filters)

document.querySelector('button').addEventListener('click' , (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input' , (e) => {
    filters.searchText = e.target.value
    renderNotes(notes , filters)
})

document.querySelector('#filter-by').addEventListener('change' ,(e) => {
    filters.sortBy = e.target.value
    renderNotes(notes , filters)
})

window.addEventListener('storage' , (e) => {
    if(e.key === 'notes') {
    // notes = JSON.parse(e.newValue)
    notes = getSavedNotes()
    renderNotes(notes , filters)
    }
})


// const dateOne = new Date('March 1 2023 04:00:00')
// const dateTwo = new Date()
// const dateOneTimetamps = dateOne.getTime()
// const dateTwoTimetamps = dateTwo.getTime()

// if (dateOneTimetamps < dateTwoTimetamps){
//     console.log(dateTwo.toString())
// } else if (dateTwoTimetamps < dateOneTimetamps){
//     console.log(dateOne.toString())
// }

// const now = moment()
// now.add(1, 'year').subsract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

// const birthday = moment()
// birthday.year(2004).month(0).date(1)
// console.log(birthday.format('MMM D, YYYY'))

// document.querySelector('#name-form').addEventListener('submit' , function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })
// DOM -Document Object Model

// Query and remove -the first element
// const p = document.querySelector('p')
// p.remove()

// const ps = document.querySelectorAll('p')
// ps.forEach(function(p){
//     p.textContent = '+++++++'
//     // p.remove()
// })

// // Add a new element 
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new Element from javascript'
// document.querySelector('body').appendChild(newParagraph)

