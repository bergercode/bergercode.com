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
// window.addEventListener("scroll", function() {
//     // Check if the user has scrolled to the bottom of the page
//     if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 100) {
//         // Show the "bye-avatar" element (uncomment to enable)
//         // document.getElementById("bye-avatar").style.display = "block";
//         // document.getElementById("bye-avatar").style.left = (parseInt(getComputedStyle(document.getElementById("bye-avatar")).left) - 2) + "px"; // Uncomment for animation
//     } else {
//         // Hide the "bye-avatar" element (uncomment to enable)
//         // document.getElementById("bye-avatar").style.display = "none";
//         // document.getElementById("bye-avatar").style.left = (parseInt(getComputedStyle(document.getElementById("bye-avatar")).left) + 2) + "px"; // Uncomment for animation
//     }
// });

// A helper function to remove the "active" class from all navbar links
function removeActive() {
    document.querySelectorAll(".navbar a").forEach(function(link) {
        link.classList.remove("active");
    });
}

// Function to hide the element and center elements if the device is in portrait orientation
function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        // Hide the element if in portrait mode
        document.getElementById("my-avatar").style.display = "none";
        
        // Center the elements with id "skills" and class "skills"
        const skillsElement = document.getElementById("skills");
        const skillsClassElements = document.querySelectorAll(".skills");

        if (skillsElement) {
            skillsElement.style.display = "flex";
            skillsElement.style.flexDirection = "column";
            skillsElement.style.alignItems = "center";
        }

        skillsClassElements.forEach(function(skill) {
            skill.style.textAlign = "center";
            skill.style.margin = "10px 0";
        });

    } else {
        // Show the element if not in portrait mode
        document.getElementById("my-avatar").style.display = "block";

        // Revert to original layout if not in portrait mode
        const skillsElement = document.getElementById("skills");
        const skillsClassElements = document.querySelectorAll(".skills");

        if (skillsElement) {
            skillsElement.style.display = "";
            skillsElement.style.flexDirection = "";
            skillsElement.style.alignItems = "";
        }

        skillsClassElements.forEach(function(skill) {
            skill.style.textAlign = "";
            skill.style.margin = "";
        });
    }
}

// Initial check when the page loads
checkOrientation();

// Add an event listener for orientation change
window.addEventListener("resize", checkOrientation);

