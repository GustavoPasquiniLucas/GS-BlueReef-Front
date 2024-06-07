const btn = document.querySelector('.btn');
const background = document.querySelector('.background');
const cabecalho = document.querySelector('.cabecalho');
const rodape = document.querySelector('.rodape');

btn.onclick = function() {
    this.classList.toggle('active');
    background.classList.toggle('active');
    cabecalho.classList.toggle('active');
    rodape.classList.toggle('active');
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 1,
    autoplay: {
        delay: 1500,
    },
    loop: true,
});
