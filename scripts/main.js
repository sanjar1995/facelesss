let menuBtn = document.querySelector('.menu-btn'),
    list = document.querySelector('.header__list'),
    wrapper = document.querySelector('.wrapper'),
    body = document.querySelector('body'),
    header__nav = document.querySelector('.header__nav'),
    preloader = document.querySelector('.preloader');
document.addEventListener('DOMContentLoaded', function () {
    preloader.classList.add('hide')
})
document.addEventListener('click', function (e) {
    if (e.target == menuBtn) {
        e.preventDefault();
        menuBtn.classList.add('active')
        list.classList.add('active')
        wrapper.classList.add('active')
        body.classList.add('active')

    } else if (e.target == wrapper) {
        menuBtn.classList.remove('active')
        list.classList.remove('active')
        wrapper.classList.remove('active')
        body.classList.remove('active')
        modalWindow.classList.remove('active')
        wrapper.style = 'z-index:4;'
    }

})
const acc = document.querySelectorAll('.acc-items'),
    faq_img_open = document.querySelectorAll('.faq-items-img-open'),
    faq_img_close = document.querySelectorAll('.faq-items-img-close'),
    text = document.querySelectorAll('.faq-items__bottom p');

for (let i = 0; i < acc.length; i++) {
    const el = acc[i];
    el.addEventListener('click', function (e) {
        // for (let k = 0; k < text.length; k++) {
        //     text[k].classList.remove('active')
        //     acc[k].classList.remove('active')
        // }
        // text[i].classList.add('active')
        // acc[i].classList.add('active')
        text[i].classList.toggle('active')
        acc[i].classList.toggle('active')
    })
}
const modalWindow = document.querySelector('.modal-window'),
    close = document.querySelector('.close'),
    openModalWindow = document.querySelectorAll('.hunt__book');
openModalWindow.forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        modalWindow.querySelector('img').setAttribute('src', el.querySelector('img').getAttribute('src'))
        wrapper.classList.add('active')
        wrapper.style = 'z-index:7;'
        modalWindow.classList.add('active')
        body.classList.add('active')
    })
});
close.addEventListener('click', function (e) {
    e.preventDefault()
    wrapper.classList.remove('active')
    modalWindow.classList.remove('active')
    body.classList.remove('active')
    wrapper.style = 'z-index:4;'
})

window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 300) {
        header__nav.classList.add('active')
    } else if (window.pageYOffset < 300) {
        header__nav.classList.remove('active')
    }

})
new WOW().init();