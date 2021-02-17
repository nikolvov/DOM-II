// Your code goes here
let header = document.querySelector('.main-navigation')
let nav = document.querySelector('.nav')
let home = document.querySelector('.intro')
let adventure = document.querySelector('.img-content')
let tContent = document.querySelector('.text-content h2')
let navItems = document.querySelector('.nav-link')
let destination = document.querySelector('.destination')
let button = document.querySelector('.btn')
let contDest = document.querySelector('.content-destination')
let contP = document.querySelector('.content-pick')

header.addEventListener('mouseover', event => {
    header.style.backgroundColor = 'orange'
})
header.addEventListener('click', event => {
    header.style.backgroundColor = 'green'
})
home.addEventListener('dblclick', (event) => {
    home.style.border = '4px solid black';
})
contDest.addEventListener('mousemove', event => {
    contDest.style.backgroundColor = 'yellow'
})
destination.addEventListener('mouseleave', event => {
    destination.style.backgroundColor = 'pink'
})
adventure.addEventListener('mouseenter', (event) => {
    adventure.style.transform = 'scale(1.2)';
    adventure.style.transition = 'transform 1s';
})
contP.addEventListener('contextmenu', event => {
    contP.style.backgroundColor = 'green'
})
adventure.addEventListener('drag', (event) => {
    adventure.style.transform = 'scale(1)';
    adventure.style.transition = 'transform 2s'
})
button.addEventListener('mouseover', event => {
    button.style.color = 'red'
})
navItems.addEventListener('mouseup', event => {
    navItems.style.color = 'white'
})
navItems.addEventListener('click', event => {
    event.preventDefault()
})

