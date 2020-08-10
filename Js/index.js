// Toggle nav menu here
let toggle = document.querySelector('#toggle'),
    menubar = document.querySelector('#menu');

toggle.addEventListener('click', function(e) {
    e.preventDefault();
    menubar.classList.contains('hidden') ? menubar.classList.remove('hidden') : menubar.classList.add('hidden');
});


let modal_toggle = document.querySelector('#modaltoggle');
let modal = document.querySelector('#modal').style.display = 'none';

modal_toggle.addEventListener('click', function(e) {
    e.preventDefault();
    modal = document.querySelector('#modal').style.display = 'flex';
})