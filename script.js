// Menu fixo
const menuFixo = document.querySelector('#menuFixed');
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    menuFixo.classList.add('ativo');
  } else {
    menuFixo.classList.remove('ativo');
  }
});

// const btnMobile = document.querySelector('#btnMobile').addEventListener('click', () =>{
//     const lista = document.querySelector('.MobileNavList').style.display = 'block';
//     console.log(lista)
// })

const menuButton = document.querySelector('#btnMobile');
const mobileNav = document.querySelector('.MobileNav');
menuButton.addEventListener('click', ()=>{
    if(mobileNav.style.display === 'none'){
        mobileNav.style.display = 'block';
    }else{
        mobileNav.style.display = 'none'
    }
})

// Form do footer
const formFooter = document.querySelector('#form').addEventListener('submit', (e) =>{
    e.preventDefault();
    })