document.addEventListener("DOMContentLoaded", function (event) {

    window.onscroll = function () {
        var top = window.pageYOffset || document.documentElement.scrollTop;
        if (top > 10) {
            document.querySelector('.offset').classList.add('scrolled');
        } else {
            document.querySelector('.offset').classList.remove('scrolled');
        }
    };

    let menu = document.querySelector('.nav-links');
    let hamburger = document.getElementById('hamburger');
    let closenav = document.getElementById('close-nav')
    let offset = document.querySelector('.offset');
    let main = document.querySelector('#main');
    let body = document.querySelector('body');
    [hamburger, closenav].forEach(item => {
        item.addEventListener('click', event => {
            menu.classList.toggle('open');
            offset.classList.toggle('open');
            main.classList.toggle('open');
            body.classList.toggle('disable')
        })
    })
    main.addEventListener('click', (event) => {
        if (menu.classList.contains('open') && !event.target.isEqualNode(hamburger) && !event.target.isEqualNode(menu) && !menu.contains(event.target)) {
            menu.classList.remove('open');
            offset.classList.remove('open')
            main.classList.remove('open');
            body.classList.toggle('disable');
        }
    });

});