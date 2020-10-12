import MainSlider from './modules/slider/slider-main';
import Player from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({page: '.page', btns: '.next'});
    slider.render();

    const player = new Player('.showup .play', '.overlay');
    player.init();
});