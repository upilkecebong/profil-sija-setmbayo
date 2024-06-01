document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton')
    const navMenu = document.getElementById('navMenu')
    const menuIcon = menuButton.querySelector('i')

    menuButton.addEventListener('click', function() {
        if (menuButton.classList.contains('focus')) {
            menuButton.classList.remove('focus')
            navMenu.classList.remove('group-focus:right-0', 'group-focus:opacity-100')
        } else {
            menuButton.classList.add('focus')
            navMenu.classList.add('group-focus:right-0', 'group-focus:opacity-100')
        }
    });

    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
            menuButton.classList.remove('focus')
            navMenu.classList.remove('group-focus:right-0', 'group-focus:opacity-100')
        }
    })
})

window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}