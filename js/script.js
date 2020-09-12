const burger = document.querySelector('.burger')
const nav = document.querySelector('.menu')
const listHome = document.querySelector('.list-home')
const listMe = document.querySelector('.list-me')
const listTechno = document.querySelectorAll('.list-techno')
const listProject = document.querySelector('.list-project')
const listContact = document.querySelectorAll('.list-contact')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    document.body.classList.toggle('active')
})

listHome.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    document.body.classList.remove('active')

})
listMe.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    document.body.classList.remove('active')
})
listTechno.forEach(el => {
    el.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('active');
    })
});

listProject.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    document.body.classList.remove('active')
})
listContact.forEach(el => {
    el.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('active');
    })
});