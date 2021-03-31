const icon = document.querySelector('.icon')
let menu = document.querySelector('.menu')
let header = document.querySelector('header')
let links = document.querySelectorAll('.menu__item')
let services = document.querySelector('#services')
let about = document.querySelector('#about')


window.onload = function () {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open')
    }
    icon.addEventListener('click', function (e) {
        menu.classList.toggle('open')
    })
    links.forEach(sin => {
        sin.addEventListener('click', function (e) {
            menu.classList.remove('open')
        })
        // console.log(sin)
    });
}