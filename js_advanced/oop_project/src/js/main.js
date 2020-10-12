import Slider from './modules/slider';
import Player from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();

    const player = new Player('.showup .play', '.overlay');
    player.init();
});