// ------------------ скрипты модального меню -------------------

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
  const modalTrigger = Array.from(document.querySelectorAll('[data-modal]')); // формируем массив из всех элементов содержащих data-modal
  console.log('modalTrigger = ' + modalTrigger); // проверяем, что он сформировался
  // перебираем массив и выделяем элемент по которому кликнули
  modalTrigger.forEach(element => {
    element.addEventListener('click', event => {
      const targetModalId = event.target.attributes['data-modal'].value;
      console.log('targetModalId = ' + targetModalId); // проверяем тот ли это элемент
      openModal(targetModalId); // обращаемся к функции, которая откроет модалку
    });
  });

  // смотрим на какую кнопку нажали
  // это кнопки вызывающие закрытие модалки
  const modalCloseTrigger = Array.from(document.querySelectorAll('[data-modal-close]'));
  console.log(modalCloseTrigger);
  modalCloseTrigger.forEach(element => {
    element.addEventListener('click', event => {
      const targetModalId = event.target.attributes['data-modal-close'].value;
      console.log('targetModalId = ' + targetModalId);
      closeModal(targetModalId);
    });
  });


  // Отображать-скрыть текст в секции about
  document.getElementById("btn-1").addEventListener("click", function () {
    var moreText = document.getElementById("more-1");
    var btnText = document.getElementById("btn-1");

    console.log('btn "See more..." was pressed');

    btnText.classList.add('_hide-button');
    moreText.classList.remove('_hide-text');
    moreText.classList.add('_visible-text');
  });

  document.getElementById("btn-2").addEventListener("click", function () {
    var moreText = document.getElementById("more-2");
    var btnText = document.getElementById("btn-2");

    console.log('btn "See more..." was pressed');

    btnText.classList.add('_hide-button');
    moreText.classList.remove('_hide-text');
    moreText.classList.add('_visible-text');
  });

  document.getElementById("btn-3").addEventListener("click", function () {
    var moreText = document.getElementById("more-3");
    var btnText = document.getElementById("btn-3");

    console.log('btn "See more..." was pressed');

    btnText.classList.add('_hide-button');
    moreText.classList.remove('_hide-text');
    moreText.classList.add('_visible-text');
  });
});