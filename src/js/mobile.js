// ------------- Отображать скрытый текст в секции about  -----------------

// функция отрабатывающая открытие текста и сокрытие кнопки
function openText(textSelector, buttonSelector) {

    const moreText = document.getElementById(textSelector);
    const btnText = document.getElementById(buttonSelector);

    console.log('btn "See more..." was pressed');

    btnText.classList.add('_hide-button');
    moreText.classList.remove('_hide-text');
    moreText.classList.add('_visible-text');
}

let btns = document.querySelectorAll('.about-item__see-more');

for (i = 0; i < btns.length; i++) {
    let numBtn = 'btn-' + (i + 1);
    let numTxt = 'more-' + (i + 1);

    document.getElementById(numBtn).addEventListener('click', event => {
        console.log('btn "' + numBtn + '" was pressed');
        openText(numTxt, numBtn);
    });

};