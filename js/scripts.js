$(".navbar a").click(function (event) {
    if($(this).attr("id")=="home-nav"){
        removeActive();
        $("#home-nav").addClass("active");
    }else if($(this).attr("id")=="projects-nav"){
        removeActive();
        $("#projects-nav").addClass("active");
    }else if($(this).attr("id")=="contact-nav"){
        removeActive();
        $("#contact-nav").addClass("active");
    }
});

function removeActive(){
    $(".navbar a").removeClass("active");
}

