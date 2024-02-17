// toggle icon navbar
 let menuIcon = document.querySelector('#icon-menu');
 let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () => {
     menuIcon.classList.toggle('fa-xmark');
     navbar.classList.toggle('active');                       
 }
// scroll sections active
let sections = document.querySelectorAll('section') ;
let navLinks = document.querySelectorAll('header nav a');
 window.onscroll = () => {
     sections.forEach(sec => {
       let top = window.scrollY;
       let offset  = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top >= offset && top < offset + height){
         navLinks.forEach(Links => {
            Links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active') ;                 
         });                  
       }
     }); 
      // sticky navbar
     let header = document.querySelector('header');      
     header.classList.toggle('stick',window.scrollY >100);
     // remove toggle icon and when click navbar link  (scroll)
     menuIcon.classList.remove('fa-xmark');
     navbar.classList.remove('active'); 
 }
 // scroll reveal
  ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200                         
  });
   ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
   ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'});
