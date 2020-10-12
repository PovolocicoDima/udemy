export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.triggers = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    bindClose() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.pauseVideo();
        });
    }

    bindTriggers() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', () =>{
                if (document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';
                } else {
                    const path = trigger.getAttribute('data-url');
                    this.createPlayer(path);
                }
            });
        });
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });
        console.log(this.player);
        this.overlay.style.display = 'flex';
    }

    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindClose();
    }
}