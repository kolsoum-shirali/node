const slides = document.querySelector('.item').children;
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const totalSlids = slides.length
let index = 0;
let duration = 6000;
console.log(totalSlids, 'totalSlids')

prev.onclick = () => {
    slide('prev')
}

next.onclick = () => {
    slide('next')
}

function slide(direction) {
    proggress()
    if (direction == 'next') {
        if (index == totalSlids - 1) {
            index = 0
        } else {
            index++
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active')
        }
        slides[index].classList.add('active')
    }
    if (direction == 'prev') {
        if (index == 0) {
            index = totalSlids - 1
        } else {
            index--
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active')
        }
        slides[index].classList.add('active')

    }
    clearInterval(timer)
    timer = setInterval(autoSlide, duration)
}

function proggress() {
    document.querySelector('.proggress').innerHTML = ''
    const div = document.createElement('div');
    div.style.width = '0';
    div.style.height = '5px';
    div.style.position = 'absolute';
    div.style.top = 0;
    div.style.left = 0;
    div.style.backgroundColor = '#c00';
    div.style.animation = "proggess " + duration / 1000 + 's linear';
    document.querySelector('.proggress').appendChild(div)
}

function autoSlide() {
    slide('next')
}

let timer = setInterval(autoSlide, duration)

proggress()

const dropDown = document.querySelector('#dropdown')
const megaMenu = document.querySelector('.mega-menu')
const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu-icon')
const closeMenu = document.querySelector('.close-menu')

dropDown.addEventListener('click', function() {
    megaMenu.classList.toggle('fade')
})

menuIcon.addEventListener('click', function() {
    menu.classList.add('show-menu')
    menu.classList.remove('hide-menu')

})

closeMenu.addEventListener('click', function() {
    menu.classList.add('hide-menu')
    menu.classList.remove('show-menu')
})