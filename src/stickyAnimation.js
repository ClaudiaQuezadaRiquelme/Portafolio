 /* 'position: -webkit-sticky' in Safari doesn't work in all cases */

// When the user scrolls the page, execute myFunction
window.onscroll = () => {executeSticky()};

// Get the navbar
let openBurgerMenu = document.getElementById('myOpenBurgerMenu');
let myNavbarMenu = document.getElementById('myMenu');

// Get the offset position of the navbar
let sticky = openBurgerMenu.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
let executeSticky = () => {
  if (window.pageYOffset >= sticky) {
    openBurgerMenu.classList.add("sticky");
    myNavbarMenu.classList.add("sticky")
  } else {
    openBurgerMenu.classList.remove("sticky");
    myNavbarMenu.classList.remove("sticky");
  }
} 