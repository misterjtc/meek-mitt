// Main namespace object
const meekMittApp = {};

meekMittApp.hero = function() {
    $('.heroMain').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: 5000,
        wrapAround: true,
    });
};
meekMittApp.init = function() {
    // fire up the hero
    meekMittApp.hero();
};
// Document ready function
$(document).ready(function() {
    console.log("I'm Ready");
    // Initialize!
    meekMittApp.init();
});