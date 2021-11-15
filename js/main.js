

$("#my-skills-tile-ux").hover(function() {
    $(".my-skills-list").css("display", "normal");
});


// my skills tiles interactions

$(document).ready(function(){
$("#my-skills-tile-ux").hover(function() {
    $("#my-skills-tile-ux h3").css("border-bottom", "solid red 2px"),
    $("#my-skills-tile-ux h3").css("margin-bottom", "-2px")
    $("#my-skills-tile-ux img").css("display", "none"),
    $("#my-skills-tile-ux .my-skills-list").fadeIn("slow", function(){}),
    $("#my-skills-tile-ux").css("background-image", "none");
    }, function() {
        $("#my-skills-tile-ux h3").css("border-bottom", "none"),
        $("#my-skills-tile-ux h3").css("margin-bottom", "0px"),
        $("#my-skills-tile-ux img").css("display", ""),
        $("#my-skills-tile-ux .my-skills-list").css("display", "none"),
        $("#my-skills-tile-ux .my-skills-list").fadeOut("slow", function(){}),
        $("#my-skills-tile-ux").css("background-image", "");
    });
});

$(document).ready(function(){
$("#my-skills-tile-coding").hover(function() {
    $("#my-skills-tile-coding h3").css("border-bottom", "solid red 2px"),
    $("#my-skills-tile-coding h3").css("margin-bottom", "-2px")
    $("#my-skills-tile-coding img").css("display", "none"),
    $("#my-skills-tile-coding .my-skills-list").fadeIn("slow", function(){}),
    $("#my-skills-tile-coding").css("background-image", "none");
    }, function() {
        $("#my-skills-tile-coding h3").css("border-bottom", "none"),
        $("#my-skills-tile-coding h3").css("margin-bottom", "0px"),
        $("#my-skills-tile-coding img").css("display", ""),
        $("#my-skills-tile-coding .my-skills-list").css("display", "none"),
        $("#my-skills-tile-coding .my-skills-list").fadeOut("slow", function(){}),
        $("#my-skills-tile-coding").css("background-image", "");
    });
});


$(document).ready(function(){
$("#my-skills-tile-ui").hover(function() {
    $("#my-skills-tile-ui h3").css("border-bottom", "solid red 2px"),
    $("#my-skills-tile-ui h3").css("margin-bottom", "-2px")
    $("#my-skills-tile-ui img").css("display", "none"),
    $("#my-skills-tile-ui .my-skills-list").fadeIn("slow", function(){}),
    $("#my-skills-tile-ui").css("background-image", "none");
    }, function() {
        $("#my-skills-tile-ui h3").css("border-bottom", "none"),
        $("#my-skills-tile-ui h3").css("margin-bottom", "0px"),
        $("#my-skills-tile-ui img").css("display", ""),
        $("#my-skills-tile-ui .my-skills-list").css("display", "none"),
        $("#my-skills-tile-ui .my-skills-list").fadeOut("slow", function(){}),
        $("#my-skills-tile-ui").css("background-image", "");
    });
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(window).scroll(function(){
    var myVideo = document.getElementsByClassName("case-study-video");
    // console.log($(window).scrollTop());
    if($(window).scrollTop() > 300 && $(window).scrollTop() < 975){
        myVideo.play();
    }else{
            myVideo.pause();
    }
});

$(document).on('click', '.see-case-study-button', function (event) {
    event.preventDefault();
    $(".see-case-study-button:after").css("transform", "scaleX(1)");
}); 