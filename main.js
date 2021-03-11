/* Hamburger menu:
mostrare / nascondere il menu principale
*/

var menuBars = $(".header-right a i.fa-bars");
var menuActive = $(".hamburger-menu");


// Creata variabile menuBars con evento click
menuBars.click(
  function(){
      menuActive.addClass("active");
  }
);
