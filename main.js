const nav = document.querySelector('.nav');
window.addEventListener('scroll', sticky);

function sticky(){
    let scroll = window.pageYOffset;
    if(scroll > 100){
        nav.classList.add('sticky');
    } else{
        nav.classList.remove('sticky');
    }
};