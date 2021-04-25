export default class Slider {
    constructor({container = null,
        btns = null,
        next = null,
        prev = null,
        prev2 = null,
        next2 = null,
        activeClass = '',
        animate,
        autoplay } = {}) {
        this.container = document.querySelector(container);
        try{this.slides = this.container.children;} catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.prev2 = document.querySelectorAll(prev2);
        this.next2 = document.querySelectorAll(next2);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}