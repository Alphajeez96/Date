// Toggle nav menu here
let toggle = document.querySelector('#toggle'),
    menubar = document.querySelector('#menu');

toggle.addEventListener('click', function(e) {
    e.preventDefault();
    menubar.classList.contains('hidden') ? menubar.classList.remove('hidden') : menubar.classList.add('hidden');
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = 'https://cdn.pixabay.com/photo/2020/07/02/17/29/landscape-5363681_960_720.jpg';
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}