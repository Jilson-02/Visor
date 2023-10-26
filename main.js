const images = ["Imagenes/Capita_America.png", "Imagenes/Iroman.png", "Imagenes/Thor.png", "Imagenes/Hulk.png", "Imagenes/Groot.png"];
let currentImageIndex = 0;

const imageElement = document.getElementById("image");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function showImage() {
    imageElement.src = images[currentImageIndex];
}

prevButton.addEventListener("click", function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage();
});

nextButton.addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
});

showImage();