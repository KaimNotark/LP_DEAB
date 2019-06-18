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

  headerHeight.classList.remove('_header-min');
  headerButton.classList.remove('_button-min');
  headerAvatar.classList.remove('_avatar-min');
  headerGrayLines.classList.remove('_table-min');
  headerGrayLines.classList.remove('_hidden-min');
  
  const minY = 200;
  let minYhr = 0;

  window.onscroll = function () {
    // отслеживаем координаты по оси Y
    const pageY = () => (window.pageYOffset || window.scrollY);
    let scrollYPos = pageY();
    // setTimeout(() => {

    // смотрим ширину окна
    const widthWindow = Math.abs(document.body.clientWidth);
    // console.log("Ширина окна = " + widthWindow);
    // console.log(scrollYPos);

    if (481 <= widthWindow && widthWindow <= 710) {
      minYhr = 2970;
    } else {
      minYhr = 3300;
    };
    // console.log("minYhr= " + minYhr);

    // if координаты больше minYhr, то убераем серые линии у header
    if (scrollYPos >= minYhr) {
      headerGrayLines.classList.add('_hidden-min');
      headerGrayLines.classList.remove('_table-min');
    } else {
      headerGrayLines.classList.remove('_hidden-min');
    };

    // if координаты больше minY, то уменьшаем высоту header, else оставляем прежней
    if (scrollYPos >= minY) {
      headerHeight.classList.add('_header-min');
      headerButton.classList.add('_button-min');
      headerAvatar.classList.add('_avatar-min');
      headerGrayLines.classList.add('_table-min');
    } else {
      headerHeight.classList.remove('_header-min');
      headerButton.classList.remove('_button-min');
      headerAvatar.classList.remove('_avatar-min');
      headerGrayLines.classList.remove('_table-min');
    };
    // }, 200); // время transition в CSS
  };

}); //  -------------  'DOMContentLoaded'