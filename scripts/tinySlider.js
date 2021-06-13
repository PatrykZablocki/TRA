// docs: https://ganlanyuan.github.io/tiny-slider/

const logoSlider = tns({
    container: '.brands-wrapper',
    loop: true,
    nav: false,
    controls: false,
    autoplay: true,
    autoplayButtonOutput: false,
    touch: false,
    items: 1,
    responsive: {
        800: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
});

document.querySelector('.logo-slider-left').addEventListener('click', () => {
    logoSlider.goTo('prev');
});

document.querySelector('.logo-slider-right').addEventListener('click', () => {
    logoSlider.goTo('next');
});
