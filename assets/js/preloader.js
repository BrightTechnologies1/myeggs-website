var preloader = document.querySelector(".preloader");
var website = document.querySelector(".kok");
var html = document.querySelector("html");
var data=document.querySelector(".section__data")

let navMenu = document.querySelector(".navMenu");

preloaderVar = setTimeout(preloaderFunc, 1000);

function preloaderFunc() {
    preloader.style.display = "none";
    website.style.display = "block";
    html.style.overflowY = "scroll";
    html.style.overflowX = "intial";
    data.style.display= "display";
}

let questionElement = document.querySelector(".questionPre")
var question = ['Sit Tight, You are about to see something great!', 'Your Eggs are Waiting!', 'Hope you enjoy your journey with us!', 'Welcome to the world of the Eggs!']


randomQuestion =  question[Math.floor(Math.random() * question.length)];
questionElement.innerHTML = randomQuestion