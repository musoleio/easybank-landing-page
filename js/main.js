const menuBtn = document.querySelector('.hamburger-menu')

const toggleMenu = () => {
    document.querySelector('.site-nav').classList.toggle('nav-open')
    // menuBtn.style.backgroundImage = "url(./../images/icon-close.svg)"
}
menuBtn.addEventListener('click', toggleMenu)
