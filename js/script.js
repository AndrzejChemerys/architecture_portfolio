const toggleBtn = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.header__nav')

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})