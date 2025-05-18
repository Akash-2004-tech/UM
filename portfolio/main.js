var typed=new Typed(".text",{
    
    strings:["Frontend Devoloper","Web Devloper","Full-Stack Devloper"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });