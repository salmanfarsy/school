const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const ul = document.querySelector('ul');
window.addEventListener('scroll', sticky);

function sticky(){
    let scroll = window.pageYOffset;
    if(scroll > 100){
        nav.classList.add('sticky');
    } else{
        nav.classList.remove('sticky');
    }
};

menu.addEventListener('click', toggle);

function toggle(){
    ul.classList.toggle('toggle');
}