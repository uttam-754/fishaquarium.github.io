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


gsap.from(".logo",{ opacity: 0, duration: 1, delay: 0.5, y: -10});
gsap.from(".humburger",{ opacity: 0, duration: 1, delay: 1, x: 20});
gsap.from(".hero-img",{ opacity: 0, duration: 1, delay: 1.5, x: 200});
gsap.from(".hero-content h2",{ opacity: 0, duration: 1, delay: 2, y: -50});
gsap.from(".hero-content h1",{ opacity: 0, duration: 1, delay: 2.5, y: -45});
gsap.from(".hero-content a",{ opacity: 0, duration: 1, delay: 3.5, y: 50});

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





window.addEventListener("DOMContentLoader", function(){
    
var form = document.getElementById("my-form");
var status = document.getElementById("status");

function success(){
    form.reset();
    status.innerHTML="Thanks!";

}
function error(){
    form.reset();
    status.innerHTML="Oops! There was a problem.";
    
}
    form.addEventListener("submit",function(ev){
        ev.preventDefault();
        var data=new FormData(form);
        this.insertAdjacentText(form.method, form.action, data, success, error);

    });
    });


    function ajax(method, url, data, success, error){
        var xhr=new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function(){
            if(xhr.readyState !== XMLHttpRequest.DONE)return;
            if(xhr.status === 200){
                success(xhr.response, xhr.responseType);
            } else{
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }



   