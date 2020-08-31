const burger = document.querySelector('.burger')
const nav = document.querySelector('.menu')
const listHome = document.querySelector('.list-home')
const listMe = document.querySelector('.list-me')
const listTechno = document.querySelectorAll('.list-techno')
const listProject = document.querySelector('.list-project')
const listContact = document.querySelectorAll('.list-contact')
const headerHome = document.querySelector('.main__header--home');
const headerMe = document.querySelector('.main__header--me');
const headerTechno = document.querySelector('.main__header--techno')
const headerProject = document.querySelector('.main__header--project')
const headerContact = document.querySelector('.main__header--contact')
const scroller = document.querySelector('.scrollTop')
const header = document.querySelector('.header')
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