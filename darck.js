// Темная тема
let styleMode = localStorage.getItem('styleMode');
const styleButton = document.getElementById('but');

const enableStyle = () => {
    document.body.classList.add('darkstyle');
    localStorage.setItem('styleMode', 'dark');
}

const disableStyle = () => {
    document.body.classList.remove('darkstyle');
    localStorage.setItem('styleMode', null);
}

styleButton.addEventListener('click', () => {
    styleMode = localStorage.getItem('styleMode');
    if (styleMode !== 'dark'){
        enableStyle();
        styleButton.innerText = "dark";
        styleButton.style.color = "white";
    }
    else{
        disableStyle();
        styleButton.innerText = "ligth";
        styleButton.style.color = "rgba(55, 60, 66, 1)";
    }
});

if (styleMode === 'dark'){
    enableStyle();
    styleButton.innerText = "dark";
    styleButton.style.color = "white";
    }

// Выпадающее меню
const menu_button = document.querySelector('#menu_button');
const menu = document.querySelector('#menu');

menu_button.addEventListener('click', () =>{
    if (menu.classList.contains('disp') == true)
        menu.classList.remove('disp');
    else
        menu.classList.add('disp');
});

// Go to top
const goTopBtn = document.querySelector(".go_top");

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (offset > coords - 40){
        goTopBtn.classList.add('go_top--show');
    }
    else{
        goTopBtn.classList.remove('go_top--show');
    }
};

function goTop(){
    if (window.pageYOffset > 0){
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
};

// Анимации
let options = {
    threshold: [0.5]
};

let callback = function(entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('active');
            observer.unobserve(entry.target)
        }
    });
};

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim');
targets.forEach(target => {
    observer.observe(target);
});