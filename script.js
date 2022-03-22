window.sr = ScrollReveal();

sr.reveal('.wrapper1',{
    distance: '0px',
    opacity: 0,
    duration: 3500
});

const wrapper1 = document.querySelector('.wrapper1');
const wrapper2 = document.querySelector('.wrapper2');
const btn = document.querySelector('.btn1');
const rating = document.querySelectorAll('.rating')
const paragraphText = document.querySelector('.printed-result');
let ratingR

rating.forEach((circle) =>{
    circle.addEventListener('click', () => {
      rating.forEach((ratingCircle) => {
        if (circle === ratingCircle) {
          ratingCircle.classList.add('rating-focus');
        } else {
          ratingCircle.classList.remove('rating-focus');
        }
      });
      ratingR = Number(circle.textContent);
    });
  });



btn.addEventListener('click', () =>{

    if (!ratingR) {
        alert('Please select a rating before proceeding');
    } else{
        wrapper1.classList.toggle('switch-1');

    sr.reveal('.wrapper2',{
        origin: 'bottom',
        distance: '-100px',
        opacity: 0,
        duration: 3500
    });

    wrapper2.classList.toggle('switch-2');

    paragraphText.textContent = `You selected ${ratingR} out of 5`;

    }
      

});



