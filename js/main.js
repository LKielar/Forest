const burgerBtn = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger-links');
const links = document.querySelectorAll('.burger-links li a')




const showBurgerNav = () => {
    burgerNav.classList.toggle('show-burger')
    if (burgerNav.classList.contains('show-burger')) {
        burgerBtn.style.color = 'white';
    } else {
        burgerBtn.style.color = 'black';
    }
}

const closeNav = () => {
    links.forEach(element => {
        element.addEventListener('click', () => {
            burgerNav.classList.remove('show-burger')
            burgerBtn.style.color = 'black';
        })
    });
}

closeNav();
burgerBtn.addEventListener('click', showBurgerNav)
