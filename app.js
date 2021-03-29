/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navigation").style.top = "0";
        console.log('scrolling up')
    } else {
        document.getElementById("navigation").style.top = "-100px";
        console.log('scrolling down')
    }
    prevScrollpos = currentScrollPos;
    
}

// responsive option 1 

const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

// Scroll reveal 

ScrollReveal().reveal('#hero');
ScrollReveal().reveal('#main', { delay: 500 });
ScrollReveal().reveal('#specialties', { delay: 500 });
ScrollReveal().reveal('#about', { delay: 500 });
ScrollReveal().reveal('#banner', { delay: 500 });
ScrollReveal().reveal('#contact', { delay: 500 });

// RESPONSIVE BTN
// const menuBtn = document.getElementsByClassName('menu-btn')

// const mobileMenu = document.getElementsByClassName('nav-menu')

// const closeMenu = document.getElementsByClassName('close')



// const clickedBtn = function() {
//     mobileMenu[0].classList.toggle('active')
// }

// menuBtn[0].addEventListener('click', clickedBtn)

// const clickedX = function() {
//   mobileMenu[0].classList.remove('active')
// }

// closeMenu[0].addEventListener('click', clickedX)

// Hero Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}