const btnMenu = document.querySelector('.hamburger-menu')
const menu = document.querySelector('.toggle-menu')
const overlay = document.querySelector('.overlay')
const close = document.querySelector('.close')
const submenu = document.querySelectorAll('.submenu')
btnMenu.addEventListener('click', function() {
    menu.classList.add('active')
    overlay.classList.add('show')
})
close.addEventListener('click', function() {
    closeMenu()
})
overlay.addEventListener('click', function() {
    closeMenu()
})

function closeMenu() {
    menu.classList.remove('active')
    overlay.classList.remove('show')
}
submenu.forEach(item => {
    item.addEventListener('click', function() {
        item.classList.toggle('show-icon')
        const mega = item.nextElementSibling
        mega.classList.toggle('show-megamenu')
    })
})