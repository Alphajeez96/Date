// const toggle = () => {
//     let state = document.getElementById('menu')
//     state ? 'block' : 'hidden';
// }

// let toggle = document.querySelector('#toggle'),
//     sidebar = document.querySelector('#menu');

// toggle.addEventListener('click', function(e) {
//     e.preventDefault();
//     sidebar.classList.toggle('hidden');
// });

let toggle = document.querySelector('#toggle'),
    menubar = document.querySelector('#menu');

toggle.addEventListener('click', function(e) {
    e.preventDefault();
    menubar.classList.contains('hidden') ? menubar.classList.remove('hidden') : menubar.classList.add('hidden');
});