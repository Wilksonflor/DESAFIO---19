// window.sr = ScrollReveal({reset: true});
// sr.reveal('#sectioninicial', {duration: 5000});
// sr.reveal('#app', {
//   rotate: {x:80, y:   0, z:0},
//   duration: 2000
// });

// Menu fixo
const menuFixo = document.querySelector('#menuFixed');
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    menuFixo.classList.add('ativo');
  } else {
    menuFixo.classList.remove('ativo');
  }
});

// 
const menuButton = document.querySelector('#btnMobile');
const mobileNav = document.querySelector('.MobileNav');
menuButton.addEventListener('click', ()=>{
    if(mobileNav.style.display === 'none'){
        mobileNav.style.display = 'block';
    }else{
        mobileNav.style.display = 'none'
    }
})
// 


// Form do footer
const formFooter = document.querySelector('#form').addEventListener('submit', (e) =>{
    e.preventDefault();
    })