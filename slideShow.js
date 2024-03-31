document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var images = document.querySelectorAll('.slideshow-container img');

    function showImage(index) {
        // Hide all images
        images.forEach(function(img) {
            img.style.display = 'none';
        });

        // Show the image at the given index
        images[index].style.display = 'block';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Show the first image initially
    showImage(currentIndex);

    // Change image every 3 seconds (adjust as needed)
    setInterval(nextImage, 30000000000);
});
