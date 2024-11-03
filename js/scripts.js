// Add an event listener to all navbar links
$(".navbar a").click(function(event) {
    // Check which link was clicked and add the "active" class to it
    if ($(this).attr("id") == "home-nav") {
        removeActive();
        $("#home-nav").addClass("active");
    } else if ($(this).attr("id") == "projects-nav") {
        removeActive();
        $("#projects-nav").addClass("active");
    } else if ($(this).attr("id") == "contact-nav") {
        removeActive();
        $("#contact-nav").addClass("active");
    }
});

// Add a scroll event listener to the window
$(window).scroll(function() {
    // Check if the user has scrolled to the bottom of the page
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        // Show the "bye-avatar" element
        // $("#bye-avatar").fadeIn();
        // You can uncomment the line below to animate the "bye-avatar" element
        // $("#bye-avatar").animate({left: "-=2px"});
    } else {
        // Hide the "bye-avatar" element
        // $("#bye-avatar").fadeOut("slow");
        // You can uncomment the line below to animate the "bye-avatar" element
        // $("#bye-avatar").animate({left: "+=2px"});
    }
});

// A helper function to remove the "active" class from all navbar links
function removeActive() {
    $(".navbar a").removeClass("active");
}
