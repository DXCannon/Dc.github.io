// Set initial image
let starter = document.getElementById("starter");

// Set rest of images in array
let heartArray = ["assests/images/assets/Asset20.png", "assests/images/assets/Asset21.png", "assests/images/assets/Asset22.png", "assests/images/assets/Asset23.png", "assests/images/assets/Asset24.png","assests/images/assets/Asset25.png", "assests/images/assets/Asset26.png", "assests/images/assets/Asset27.png"];

// Set a counter variable
let count = 0;

// Declare animate function
function animate(){
    // Select initial image
    starter.src = heartArray[count];
    // Increment through array
    count++;
    // Increase count through full length of array
    if (heartArray.length == count){
        // Reset and start over
        count = 0;
    }
}

setInterval(animate, 150)