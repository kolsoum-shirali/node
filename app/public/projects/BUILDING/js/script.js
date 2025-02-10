const btn = document.querySelector('.toggle-menu');
const list = document.querySelector('nav ul');
console.log(btn)
console.log(list)

btn.addEventListener('click', function() {
    list.classList.toggle('active');
    btn.classList.toggle('active');
})

window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('hide')
})