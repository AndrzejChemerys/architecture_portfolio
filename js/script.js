const toggleBtn = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar__links')

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})