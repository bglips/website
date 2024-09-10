// scripts.js

// Function to resize images
function resizeImages(selector, width, height) {
    const images = document.querySelectorAll(selector);
    images.forEach(image => {
        image.style.width = `${width}px`;
        image.style.height = `${height}px`;
        image.style.objectFit = 'cover'; // Ensures the image covers the area without distortion
    });
}

// Resize all images with the class 'resize-image' to 80x80
window.addEventListener('load', () => {
    resizeImages('.resize-image', 80, 80);
});