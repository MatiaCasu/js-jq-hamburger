/* Hamburger menu:
mostrare / nascondere il menu principale
*/

var menuBars = $(".header-right a i.fa-bars");
var menuActive = $(".hamburger-menu");
var menuClose = $(".close");

// Creata variabile menuBars con evento click
menuBars.click(
  function(){
      menuActive.addClass("active");
  }
);

menuClose.click(
  function(){
    menuActive.removeClass("active");
  }
);
