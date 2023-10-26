const nombre = document.getElementById('nombre');
const celular = document.getElementById('celular');
const email = document.getElementById('email');
const comentario = document.getElementById('comentario');
const form = document.getElementById('MyForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nombre.value.trim() === '') {
        nombre.classList.add('error');
        nombre.placeholder = 'Ingrese'
    } else {
        nombre.classList.remove('error');
    }

    if (celular.value.trim() === '') {
        celular.classList.add('error');
        celular.placeholder = '*Debe ingresar un nombre*';
    } else {
        celular.classList.remove('error');
    }

    if (email.value.trim() === '' || !/^\S+@\S+\.\S+$/.test(email.textContent)) {
        email.classList.add('error');
        email.placeholder = '*Debe ingresar un email*';
    } else {
        email.classList.remove('error');
    }

    if (comentario.value.trim() === '') {
        comentario.classList.add('error');
        comentario.placeholder = '*Debe ingresar un nombre*';
    } else {
        comentario.classList.remove('error');
    }

});