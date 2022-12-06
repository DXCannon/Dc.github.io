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


let bigFishTheory = document.getElementById('bigFishTheory');

bigFishTheory.onclick = openLightbox

// Make function to make closer clickable
function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;

 let vinceStaples = document.getElementById('vinceStaples');
 vinceStaples.onclick = openLightbox;

 let Denzel = document.getElementById('Denzel');
 Denzel.onclick = openLightbox;

 let denzelZuu = document.getElementById('denzelZuu');
 denzelZuu.onclick = openLightbox;

 let denzelImperial = document.getElementById('denzelImperial');
 denzelImperial.onclick = openLightbox;

 let denzelMelt = document.getElementById('denzelMelt');
 denzelMelt.onclick = openLightbox;

 let foreverStory = document.getElementById('foreverStory');
 foreverStory.onclick = openLightbox;

 let Foreverstory = document.getElementById('Foreverstory');
 Foreverstory.onclick = openLightbox;

 let Maadcity = document.getElementById('Maadcity');
 Maadcity.onclick = openLightbox;


