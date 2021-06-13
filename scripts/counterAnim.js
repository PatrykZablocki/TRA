import { CountUp } from './countUp.min.js'

const elements = document.querySelectorAll('.number');

const counters = [];

elements.forEach(el => {
    counters.push(new CountUp(
        el,
        el.dataset.value,
        {
            decimalPlaces: el.dataset.decimal_places,
        }
        ));
});

function startCounting() {
    if(window.pageYOffset > (elements[0].offsetTop - window.innerHeight + 100)) {
        counters.forEach(counter => {
            counter.start();
        });
        window.removeEventListener('scroll', startCounting);
    }
}

window.addEventListener('scroll', startCounting);