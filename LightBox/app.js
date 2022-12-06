let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

// function to open lightbox
function openLightbox(){
    // Turn on display class from display none to display flex
    lightboxContainer.classList.add('display');
    // Display image src inside lightbox
    lightbox.src = this.src;
}


let coffeeImage = document.getElementById('coffeeImage1');

coffeeImage.onclick = openLightbox

// Make function to make closer clickable
function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;
