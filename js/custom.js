/*global $, alert, console*/

$(function () {

    'use strict';
    
    // trigger nice scroll
    
    $("html").niceScroll({
        /*
        cursorcolor: "",
        cursorwidth: "",
        cursorborder: ""
        */
    });

    // Scroll To Section
    $("header nav ul li").click(function() {
        $("html,body").animate({
            scrollTop: $($(this).data("scroll")).offset().top
        }, 1000);
    });

    //add Class Active
    $("header nav ul li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    //add Class btn
    $(".portfolio .my-projects ul li").click(function() {
        $(this).addClass("btn").siblings().removeClass("btn");
    });

    //shuffle Projects
    $(".portfolio .my-projects ul li").click(function() {
        var shuffle = $(this).data("shuffle");
        
        $(".portfolio .projects .image").hide(function() {
            $(shuffle).show();
        });
        
    });


});