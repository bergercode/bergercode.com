$(".navbar a").click(function (event) {
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

// $(window).scroll(function(){
//     if($("body").height()<=($(window).height()+ $(window).scrollTop())){
//       $("#bye-avatar").show();
//     }
//   });
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $("#bye-avatar").show();
        // $("#bye-avatar").animate({left:"-=2px"});
    }else{
        $("#bye-avatar").hide();
        // $("#bye-avatar").animate({left:"+=2px"});
    }
 });

function removeActive() {
    $(".navbar a").removeClass("active");
}

