
const items = document.querySelectorAll('.questions__item');
console.log(items)

items.forEach(function(item){
    const questionsButton = item.querySelector('.questions__btn')
    const questionsTitle = item.querySelector('.questions__title')
    const questionsNumber = item.querySelector('.questions__num')
    const questionsText = item.querySelector('.questions__text')
    const qustionsImage = item.querySelector('.questions__img')

    questionsButton.addEventListener('click', function(){
        questionsTitle.classList.toggle('questions__title--afterclick')
        questionsNumber.classList.toggle('questions__num--afterclick')
        questionsText.classList.toggle('questions__text')
        questionsText.classList.toggle('questions__text--afterclick')
        qustionsImage.classList.toggle('questions__img--afterclick')
})
})