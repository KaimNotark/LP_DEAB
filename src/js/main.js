import axios from 'axios';
import Swal from 'sweetalert2';

document.addEventListener('load', event => {

  const form = document.getElementById('formId');

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const parsedForm = event.target.querySelectorAll('input, textarea');
    console.log(parsedForm);

    const prsObj = {};
    for (let val of parsedForm) {
      prsObj[val.name] = val.value;
    }
    console.log(prsObj);


    axios.post('http://localhost:5000/call', prsObj)
      .then(response => {
        console.log(response);
        Swal.fire(
          response.data,
          'Всё хорошо, сервер принял запрос.',
          'success'
        )
      })
      .catch(error => {
        console.error(error.response.data);
        Swal.fire({
          type: 'error',
          title: 'Что-то пошло не так.',
          text: error.response.data,
          footer: 'Сервер запрос не принял.'
        })
      });

  });
});