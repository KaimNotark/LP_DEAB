document.addEventListener('DOMContentLoaded', function () {
  // ------------- Отображать скрытый текст в секции about  -----------------

  // функция отрабатывающая открытие текста и сокрытие кнопки
  function showText(textSelector, buttonSelector) {

    const hiddenText = document.getElementById(textSelector);
    const buttonShowText = document.getElementById(buttonSelector);

    console.log('btn "See more..." was pressed');

    buttonShowText.classList.add('_hide-button');
    hiddenText.classList.remove('_hide-text');
    hiddenText.classList.add('_visible-text');
  }

  let showTextButtons = document.querySelectorAll('.about-item__see-more');

  for (i = 0; i < showTextButtons.length; i++) {
    let numberOfShowTextButton = 'btn-' + (i + 1);
    let numberHiddenText = 'more-' + (i + 1);

    document.getElementById(numberOfShowTextButton).addEventListener('click', event => {
      console.log('btn "' + numberOfShowTextButton + '" was pressed');
      showText(numberHiddenText, numberOfShowTextButton);
    });
  };

  // ------------------ изменение высоты header и показать/скрыть серые линии ------------------

  // изменение высоты у header в процессе прокрутки окна
  const headerHeight = document.getElementById('headerId');
  const headerButton = document.getElementById('buttonId');
  const headerAvatar = document.getElementById('avatarId');
  const headerGrayLines = document.getElementById('tableId');

  const scrollYPositionForReductionHeightAtHeader = 200;
  let scrollYPositionForHideGrayLinesAtHeader = 0;

  window.onscroll = function () {
    // отслеживаем координаты по оси Y
    const pageScrollYPosition = () => (window.pageYOffset || window.scrollY);
    let currentScrollYPositionByPage = pageScrollYPosition();

    // смотрим ширину окна
    const widthWindow = Math.abs(document.body.clientWidth);

    if (481 <= widthWindow && widthWindow <= 710) {
      scrollYPositionForHideGrayLinesAtHeader = 2870;
    } else {
      scrollYPositionForHideGrayLinesAtHeader = 3300;
    };

    // if координаты больше scrollYPositionForHideGrayLinesAtHeader, то убераем серые линии у header
    if (currentScrollYPositionByPage >= scrollYPositionForHideGrayLinesAtHeader) {
      headerGrayLines.classList.add('_hidden-min');
      headerGrayLines.classList.remove('_table-min');
    } else {
      headerGrayLines.classList.remove('_hidden-min');
    };

    // if координаты больше scrollYPositionForReductionHeightAtHeader, 
    // то уменьшаем высоту header, else оставляем прежней
    const headerHeightMinMax = currentScrollYPositionByPage >= scrollYPositionForReductionHeightAtHeader ? 'add' : 'remove';

    headerHeight.classList[headerHeightMinMax]('_header-min');
    headerButton.classList[headerHeightMinMax]('_button-min');
    headerAvatar.classList[headerHeightMinMax]('_avatar-min');
    headerGrayLines.classList[headerHeightMinMax]('_table-min');

  };

}); //  -------------  'DOMContentLoaded'