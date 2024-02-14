const YesBtn = document.querySelector('#YesBtn');

YesBtn.addEventListener('click',function () {
    alert('Sabía que ibas a decir que sí, nos vemos más tarde amor, se que es un poquito dificil pero como siempre decimos cuando se quiere se puede aunque sea un ratito, te amo muchooo mi vidaa<3')
});

const NoBtn = document.querySelector('#NoBtn');

NoBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NoBtn.style.setProperty('top',randomY+'%');
    NoBtn.style.setProperty('left',randomX+'%');
    NoBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})