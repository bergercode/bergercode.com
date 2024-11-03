// Add an event listener to all navbar links
document.querySelectorAll(".navbar a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        // Check which link was clicked and add the "active" class to it
        if (this.id === "home-nav") {
            removeActive();
            document.getElementById("home-nav").classList.add("active");
        } else if (this.id === "projects-nav") {
            removeActive();
            document.getElementById("projects-nav").classList.add("active");
        } else if (this.id === "contact-nav") {
            removeActive();
            document.getElementById("contact-nav").classList.add("active");
        }
    });
});

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    // Check if the user has scrolled to the bottom of the page
    if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 100) {
        // Show the "bye-avatar" element (uncomment to enable)
        // document.getElementById("bye-avatar").style.display = "block";
        // document.getElementById("bye-avatar").style.left = (parseInt(getComputedStyle(document.getElementById("bye-avatar")).left) - 2) + "px"; // Uncomment for animation
    } else {
        // Hide the "bye-avatar" element (uncomment to enable)
        // document.getElementById("bye-avatar").style.display = "none";
        // document.getElementById("bye-avatar").style.left = (parseInt(getComputedStyle(document.getElementById("bye-avatar")).left) + 2) + "px"; // Uncomment for animation
    }
});

// A helper function to remove the "active" class from all navbar links
function removeActive() {
    document.querySelectorAll(".navbar a").forEach(function(link) {
        link.classList.remove("active");
    });
}
