const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".humburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener('click',() =>{
    if (navLeft < 0){
        menu.classList.add("show");
        document.body.classList.add("show");
        // navBar.body.classList.add("show");
    }
});

navClose.addEventListener('click',() =>{
    if (navLeft < 0){
        menu.classList.remove("show");
        document.body.classList.remove("show");
        // navBar.body.classList.remove("show");
    }
});

// fix Nav
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll",()=>{
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight){
        navBar.classList.add("fix-nav");
        $('.goto').fadeIn();
    } else{
        navBar.classList.remove("fix-nav");
        $('.goto').fadeOut();
    }
});

// scroll to
const links = [ ...document.querySelectorAll('.scroll-link')];

links.map( link=> {
    if(!link) return;
    link.addEventListener("click", e=>{
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);
        let position = el.OffsetTop - navHeight;

        Window.scrollTo({
            top: position,
            left:0,
        });

        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.body.classList.remove("show");
    });
});


// gsap.from(".logo",{ opacity: 0, duration: 1, delay: 0.5, y: -10});
// gsap.from(".humburger",{ opacity: 0, duration: 1, delay: 1, x: 20});
// gsap.from(".hero-img",{ opacity: 0, duration: 1, delay: 1.5, x: 200});
// gsap.from(".hero-content h2",{ opacity: 0, duration: 1, delay: 2, y: -50});
// gsap.from(".hero-content h1",{ opacity: 0, duration: 1, delay: 2.5, y: -45});
// gsap.from(".hero-content a",{ opacity: 0, duration: 1, delay: 3.5, y: 50});

$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY >80){
            $('.goto').fadeIn();
        }else{
            $('.goto').fadeOut();
        }
    })
$('.goto').click(function(){
    $('html, body').animate({scrollTop: 0}, 800);
})
})

// var noti = document.getElementById('.nav-link.icon');
// var select = document.querySelector('.select');
// var icon = document.getElementsByClassName('.bx bx-shopping-bag');
// for(but of icon){
//     but.addEventListener('click',(e)=>{
//         var add =Number(noti.getAttribute('data-count')|| 0);
//         noti.setAttribute('data-count',add + 1);
//         noti.classList.add('zero');
//     });
// }

            


// $('.add-to-cart').on('click', (e) => {
//     addToCart(e.currentTarget)
//   })
  
//   const addToCart = (product) => {
//     const productId = $(product).attr('productId');
//     const isAlreadyInCart = $.grep(productsInCart, el => {return el.id == productId}).length;
  
//     if (isAlreadyInCart) {
//       $.each(storageData, (i, el) => {
//         if (productId == el.id) {
//           el.itemsNumber += 1;
//         }
//       })
//     } else {
//       const newProduct = {
//         id: Number(productId),
//         itemsNumber: 1
//       }
  
//       storageData.push(newProduct);
//     }
  
//     updateCart();
//     updateProductList();
//   }