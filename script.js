window.sr = ScrollReveal();

sr.reveal('.wrapper1',{
    distance: '0px',
    opacity: 0,
    duration: 3500
});

const wrapper1 = document.querySelector('.wrapper1');
const wrapper2 = document.querySelector('.wrapper2');
const btn = document.querySelector('.btn1');

btn.addEventListener('click', function (){
    wrapper1.classList.toggle('switch-1');

    sr.reveal('.wrapper2',{
        origin: 'bottom',
        distance: '-100px',
        opacity: 0,
        duration: 3500
    });

    wrapper2.classList.toggle('switch-2');  
    
})



