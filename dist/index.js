const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const hlink = document.querySelectorAll('#hlink');
const fasolid = hamburger.querySelector('.fa-solid');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    fasolid.classList.toggle('fa-xmark');
});

hlink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        fasolid.classList.remove('fa-xmark');
    });
});

// // testimonial
// // Select elements using getElementsByClassName (without dot notation)
// const userTexts = document.getElementsByClassName('user-text');
// const userPics = document.getElementsByClassName('user-pic');

// function showReview(event) {
//     // Remove active class from all pics and texts
//     for (let pic of userPics) {
//         pic.classList.remove("active-pic");
//     }
//     for (let text of userTexts) {
//         text.classList.remove("active-text");
//     }

//     // Get the index of the clicked pic
//     let i = Array.from(userPics).indexOf(event.target);

//     // Add active class to the clicked pic and corresponding text
//     userPics[i].classList.add("active-pic");
//     userTexts[i].classList.add("active-text");
// }

const userTexts = document.getElementsByClassName('user-text')
const userPics = document.getElementsByClassName('user-pic')

function showReview() {
    for(pic of userPics){
        pic.classList.remove('active-pic');
    }
    for(text of userTexts){
        text.classList.remove('active-text')
    }

    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add('active-pic')
    userTexts[i].classList.add('active-text')
}

// pricing
const toggleBtn = document.getElementById('toggleBtn');

const card1Front = document.querySelector('#card1Front');
const card1Back = document.querySelector('#card1Back');

const card2Front = document.querySelector('#card2Front');
const card2Back = document.querySelector('#card2Back');

const card3Front = document.querySelector('#card3Front');
const card3Back = document.querySelector('#card3Back');

toggleBtn.addEventListener('change', () => {
    card1Front.classList.toggle('-rotate-y-180');
    card1Back.classList.toggle('rotate-y-180');

    card2Front.classList.toggle('-rotate-y-180');
    card2Back.classList.toggle('rotate-y-180');

    card3Front.classList.toggle('-rotate-y-180');
    card3Back.classList.toggle('rotate-y-180');
})

// static Nav
const navbar = document.querySelector('header')
window.onscroll = () => {
    if(window.scrollY > 100){
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-color-gray');
    }else {
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-color-gray');
    }
}

