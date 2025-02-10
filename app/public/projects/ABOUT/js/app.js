const tabMenu = document.querySelector('#tab-btn').children;
const items = document.querySelector('.portfolio-gallery').children
for (let j = 0; j < tabMenu.length; j++) {
    tabMenu[j].addEventListener('click', function() {
        for (let i = 0; i < tabMenu.length; i++) {
            tabMenu[i].classList.remove('active')
        }
        this.classList.add('active')
        const target = this.getAttribute('data-target')
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = 'none';
            if (target == items[k].getAttribute('data-id')) {
                items[k].style.display = 'block'
            }
            if (target == 'all') {
                items[k].style.display = 'block'
            }
        }
    })
}

// close

const close = document.querySelector('.close')
const lightbox = document.querySelector('.light-box')
const lightboxImage = lightbox.querySelector('img')

lightbox.addEventListener('click', function(event) {
    if (event.target != lightboxImage) {
        lightbox.classList.add('hide')
        lightbox.classList.remove('show')
    }
})

close.addEventListener('click', function() {
    lightbox.classList.add('hide')
    lightbox.classList.remove('show')
})

const gallery = document.querySelector('.portfolio-gallery')
const galleryItem = gallery.querySelectorAll('.item')
galleryItem.forEach((element) => {
    element.querySelector('span').addEventListener('click', function() {
        lightbox.classList.add('show')
        lightbox.classList.remove('hide')
        lightboxImage.src = element.querySelector('img').getAttribute('src')
    })
})


// slider
let customers = document.querySelector('.customer-description').children
let totalCustomers = customers.length
let index = 0
let nextSlider = document.querySelector('.next')
let prevSlider = document.querySelector('.prev')

nextSlider.onclick = function() {
    next('next')
}

prevSlider.onclick = function() {
    next('prev')
}

function next(direction) {
    if (direction == 'next') {
        index++
        if (index == totalCustomers) {
            index = 0
        }
    } else {
        if (index == 0) {
            index = totalCustomers - 1
        } else {
            index--
        }
    }
    for (let k = 0; k < totalCustomers; k++) {
        customers[k].classList.remove('active')
    }
    customers[index].classList.add('active')

}

// headerFix

window.onscroll = function() {
    const scrollTopFix = document.documentElement.scrollTop;
    if (window.innerWidth > 991) {
        if (scrollTopFix > 100) {
            document.querySelector('header').classList.add('fixed')
        } else {
            document.querySelector('header').classList.remove('fixed')
        }

    }
}


// navbar

const navbar = document.querySelector('.navbar')
const aTags = navbar.querySelectorAll('a')
console.log(aTags)
aTags.forEach((item) => {
    item.addEventListener('click', function() {
        for (let i = 0; i < aTags.length; i++) {
            aTags[i].classList.remove('active')
        }
        this.classList.add('active')
    })
})


// navbarToggle

const navbarToggle = document.querySelector('.navbar-toggle')
const btnMenu = document.querySelector('.hamburger-menu')
btnMenu.addEventListener('click', function() {
    navbarToggle.classList.toggle('show')
    if (navbarToggle.classList.contains('show')) {
        btnMenu.classList.add('active')
    } else {
        btnMenu.classList.remove('active')
    }
})