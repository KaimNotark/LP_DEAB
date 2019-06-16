// ------------------ скрипты модального меню -------------------


// изменение высоты у header в процессе прокрутки окна
const headerHeight = document.getElementById('headerId');
const headerButton = document.getElementById('buttonId');
const headerAvatar = document.getElementById('avatarId');
const headerTable = document.getElementById('tableId');
headerHeight.classList.remove('_header-min');
headerButton.classList.remove('_button-min');
headerAvatar.classList.remove('_avatar-min');
headerTable.classList.remove('_table-min');
headerTable.classList.remove('_hidden-min');
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

  // if координаты больше minYhr, то убераем серые полоски у header
  if (scrollYPos >= minYhr) {
    headerTable.classList.add('_hidden-min');
    headerTable.classList.remove('_table-min');
  } else {
    headerTable.classList.remove('_hidden-min');
  };

  // if координаты больше minY, то уменьшаем высоту header, else оставляем прежней
  if (scrollYPos >= minY) {
    headerHeight.classList.add('_header-min');
    headerButton.classList.add('_button-min');
    headerAvatar.classList.add('_avatar-min');
    headerTable.classList.add('_table-min');
  } else {
    headerHeight.classList.remove('_header-min');
    headerButton.classList.remove('_button-min');
    headerAvatar.classList.remove('_avatar-min');
    headerTable.classList.remove('_table-min');
  };
  // }, 200); // время transition в CSS
};

// убрать скролл страницы после отображения модального окна
document.addEventListener("DOMContentLoaded", function () {
  // вычисляем ширину полосы прокрутки и берем ее модуль
  const scrollbar = Math.abs(document.body.clientWidth - window.innerWidth) + 'px';
  console.log(scrollbar);

  const pageOffset = () => (window.pageYOffset || window.scrollY);
  let prevBodyOverflow = document.body.style.overflow || 'initial'; // сохраняем значение overflow на старте страницы
  let prevScrollYPosition = 0; // вводим переменную для сохранения параметра scrollY

  // функция отрабатывающая открытие модального окна
  function openModal(selector) {
    prevScrollYPosition = pageOffset(); // сохраняем значение параметра scrollY
    prevBodyOverflow = document.body.style.overflow; // сохраняем значение overflow до открытия модалки
    const el = document.getElementById(selector);
    el.classList.add('_opened'); // добавляем модификатор _opened
    document.body.style.overflow = 'hidden'; // скрываем полосу прокрутки
    document.body.style.marginRight = scrollbar; // компенсируем отсутсвие полосы прокрутки (иначе будет скачкообразнное смещение страницы)
    btnOpenElem.classList.remove('_visible');
  }
  // функция отрабатывающая закрытие модального окна
  function closeModal(selector) {
    const el = document.getElementById(selector);
    el.classList.remove('_opened'); // удаляем модификатор _opened
    // ждем пока отработает transition в CSS, чтобы вернуть полосу прокрутки
    setTimeout(() => {
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.marginRight = 0;
      btnOpenElem.classList.add('_visible');
    }, 200); // время transition в CSS
  }

  // смотрим на какую кнопку нажали
  // это кнопки вызывающие открытие модалки
  const modalTrigger = Array.from(document.querySelectorAll('[mobile-menu]')); // формируем массив из всех элементов содержащих mobile-menu
  console.log('modalTrigger = ' + modalTrigger); // проверяем, что он сформировался
  // перебираем массив и выделяем элемент по которому кликнули
  modalTrigger.forEach(element => {
    element.addEventListener('click', event => {
      const targetModalId = event.target.attributes['mobile-menu'].value;
      console.log('targetModalId = ' + targetModalId); // проверяем тот ли это элемент
      openModal(targetModalId); // обращаемся к функции, которая откроет модалку
    });
  });

  // смотрим на какую кнопку нажали
  // это кнопки вызывающие закрытие модалки
  const modalCloseTrigger = Array.from(document.querySelectorAll('[mobile-menu-close]'));
  console.log(modalCloseTrigger);
  modalCloseTrigger.forEach(element => {
    element.addEventListener('click', event => {
      const targetModalId = event.target.attributes['mobile-menu-close'].value;
      console.log('targetModalId = ' + targetModalId);
      closeModal(targetModalId);
    });
  });

});