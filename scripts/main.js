// Main namespace object
const meekMittApp = {};

// Hero slider function
meekMittApp.hero = function() {
    $('.heroMain').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: 5000,
        wrapAround: true,
        prevNextButtons: false
    });
};

// Smoothscroll function
meekMittApp.smoothScroll = function () {
    // Smooth scroll to home
    $('.homeButton').on('click', function() {
        $.smoothScroll({
          scrollTarget: '#home',
          speed: 800
        });
        return false;
      });
    // Smooth scroll to menu section
    $('.menuButton').on('click', function() {
        $.smoothScroll({
          scrollTarget: '#menu',
          speed: 800
        });
        return false;
      });
};
// Mobile nav menu actuation
meekMittApp.navMenu = function() {
    // On click of the mobile nav icon expand or collapse the nav
    $(".headerMobileNavLink").on("click", function(){
         $navHeight = $('header').height();
        console.log($navHeight);
        // If the header bar has class navCheck collapse it - else expand it
        if ( $('header').hasClass("navCheck") ) {
        // collapse nav
          $('header').animate({height: "75px"}, 400, "linear");
          $('header').removeClass('navCheck');
          $('.logo').css("margin-top", "0px")
          $(".mobileList, .nav").fadeOut( "fast", function() {
            // Animation complete
          });
        } else {
          // expand nav
          $('header').animate({height: "250px"}, 400, "linear");
          $('header').addClass('navCheck');
          $('.logo').css("margin-top", "15px")
          $('.mobileList, .nav').css("display", "flex");
          $(".mobileList").fadeIn( "fast", function() {
            // Animation complete
          });
        }
      });
}


// Init function
meekMittApp.init = function() {
    // fire up the hero
    meekMittApp.hero();
    meekMittApp.smoothScroll();
    meekMittApp.navMenu();
};

// Document ready function
$(document).ready(function() {
    console.log("I'm Ready");
    // Initialize!
    meekMittApp.init();
});