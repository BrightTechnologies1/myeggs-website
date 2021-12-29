/*====== MENU =====*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*====== RELLAX =====*/
var rellax = new Rellax('.parallax');


/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: .5, y: 30, ease:'expo.out'});
gsap.from('.nav__toggle', {opacity:0, duration: 3, delay: .7, y: 30, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: .7, y: 35, ease:'expo.out', stagger: .2})

/*Text*/
gsap.from('.home__title', {opacity:0, duration: 3, delay: 1.3, y: 35, ease:'expo.out'});
gsap.from('.home__subtitle', {opacity:0, duration: 3, delay: 1.1 , y: 35, ease:'expo.out'});

/*Scroll*/
gsap.from('.home__scroll', {opacity:0, duration: 3, delay: 1.5, y: 25, ease:'expo.out'});


/*====== SCROLL REVEAL SECTION ======*/
const sr = ScrollReveal({
    duration: 2000,
    reset: true
});




var shows = document.querySelectorAll(".show");
var infos = document.querySelectorAll(".info");
var accordions = document.querySelectorAll(".accordion");

for (let i = 0; i < shows.length; i++) {
  shows[i].onclick = function() {
    for (let j = 0; j < shows.length; j++) {
      if (shows[j] != this) {
        infos[j].classList.remove("reveal");
        shows[j].innerHTML = "+";
        accordions[j].classList.remove("radius");
      }
    }
    accordions[i].classList.toggle("radius");
    infos[i].classList.toggle("reveal");
    if (infos[i].className.includes("reveal")) shows[i].innerHTML = "-";
    else shows[i].innerHTML = "+";
  };
}


var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex+=n);
}

function currentSlide(n){
  showSlides(slideIndex=n);
}

function showSlides(n){
var i;
var slides=document.getElementsByClassName("mySlides");
var dots= document.getElementsByClassName("dot");
if(n > slides.length){slideIndex=1}
if(n<1){slideIndex=slides.length}
for(i=0; i<slides.length; i++){
  slides[i].style.display = "none";
}
for( i=0; i<dots.length; i++){
  dots[i].className=dots[i].className.replace("active", "");
}
slides[slideIndex-1].style.display="block";
dots[slideIndex-1].className+="active";
}


window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "You've been whitelisted";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
