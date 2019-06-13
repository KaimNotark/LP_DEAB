import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import modal from './modal.js'; // подключение внешнего *.js файла
import mobile from './mobile.js';
import form from './form.js';

// подключение внешнего *.js файла через функцию
//  function addScript(src) {
//    var script = document.createElement('script');
//    script.src = src;
//    script.async = false;
//    document.head.appendChild(script);
//  };

//  addScript('./modal.js');