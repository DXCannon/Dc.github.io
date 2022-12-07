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

// Set single variable to get all image in gallery
let galleryImages = document.getElementsByClassName("galleryImage")
// Create loop to cycle through images and run Onclick even per image

for (let i = 0; i < galleryImages.length; i++ ){
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox
}


// Make function to make closer clickable
function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;







