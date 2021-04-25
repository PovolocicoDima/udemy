import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Forms from './modules/forms';
import ShowInfo from './modules/showinfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        container: '.page', 
        btns: '.next'
    });
    slider.render();

    const modulePageSlider = new MainSlider({
        container: '.moduleapp',
        btns: '.next',
        next2: '.nextmodule',
        prev2: '.prevmodule'
    });
    modulePageSlider.render();

    const showUp = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUp.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();


    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();
    
    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Forms('.form').init();
    new ShowInfo('.plus__content').init();
    new Download('.download').init();
});