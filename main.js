
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
     nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
     nav.removeAttribute("style");
   }
} 


function setActive(element) {
  // Remove 'active' class from all links
  let links = document.querySelectorAll('.nav ul li a');
  links.forEach(link => {
      link.classList.remove('active');
  });

  // Add 'active' class to the clicked link
  element.classList.add('active');
}

  

      // TAKES YOU TO CONTACT SECTION 
function scrollToContact() {
  // Scroll to the contact section
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

  // Activate the corresponding navigation link
  setActive(document.querySelector('a[href="#contact"]'));
}

function setActive(element) {
  // Remove 'active' class from all navigation links
  const navLinks = document.querySelectorAll('.nav ul li a');
  navLinks.forEach(link => link.classList.remove('active'));

  // Add 'active' class to the clicked navigation link
  element.classList.add('active');
}

