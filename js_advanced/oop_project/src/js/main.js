import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import Player from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const showUp = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev'
    });
    showUp.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev'
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev'
    });
    feedSlider.init();


    const player = new Player('.showup .play', '.overlay');
    player.init();
});