const burgerButton = document.querySelector('.burger')
const headerElement = document.querySelector('.header')
const nav = document.querySelector('.header__nav');
const headerItem = document.querySelectorAll('.header__item')
const burgerMenu = document.getElementById('burger__menu')
const headerButton = document.querySelector('.header__btn')

burgerButton.addEventListener('click', function(){
    burgerMenu.classList.toggle('burger__menu__on')
    const burgerFlag = burgerMenu.classList.contains('burger__menu__on')
    const wrapper = document.querySelector('.wrapper')

    if(burgerFlag){
        headerElement.append(burgerMenu)
        burgerMenu.appendChild(nav);
        nav.classList.add('nav__burger')
        headerItem.forEach((item)=>{
        item.style.fontSize = '25px'
    })
    } else {
        nav.classList.remove('nav__burger')
        headerItem.forEach((item)=>{
        item.style.fontSize = '18px'
    })
    const headerTop = document.querySelector('.header__top')
    const burgerBox = document.querySelector('.burger__box')
    headerTop.insertBefore(nav, burgerBox)
    }
})