// JavaScript code for handling button click
document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with class "buy-btn"
    var buyButtons = document.querySelectorAll(".buy-btn");

    // Add click event listener to each button
    buyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var url = button.dataset.url; // Get the URL from the data-url attribute
            openInNewTab(url);
        });
    });

    // Function to open link in a new tab
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
});
