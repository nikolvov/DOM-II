// Your code goes here
let header = document.querySelector('.main-navigation')
let nav = document.querySelector('.nav')

header.addEventListener('mouseover', event => {
    header.style.backgroundColor = 'orange'
})
header.addEventListener('click', event => {
    header.style.backgroundColor = 'green'
})
nav.addEventListener('keydown', event => {
    nav.style.backgroundColor = 'blue'
})