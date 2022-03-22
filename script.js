const wrapper1 = document.querySelector('.wrapper1');
const wrapper2 = document.querySelector('.wrapper2');
const btn = document.querySelector('.btn1');

btn.addEventListener('click', function (){
    wrapper1.classList.toggle('switch-1');
    wrapper2.classList.toggle('switch-2');   
})



