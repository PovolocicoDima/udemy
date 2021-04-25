import $ from '../core';

$.prototype.addAttribute = function(name, value) {
    for (let i = 0; i < this.length; i++ ) {
        this[i].setAttribute(name, value);
    }
    return this;
};

$.prototype.deleteAttribute = function(name) {
    for (let i = 0; i < this.length; i++ ) {
        this[i].removeAttribute(name);
    }
    return this;
};

$.prototype.toggleAttribute = function(name, value) {
    for (let i = 0; i < this.length; i++ ) {
        if (!this[i].hasAttribute(name)) {
            this[i].setAttribute(name, value);
        } else {
            this[i].removeAttribute(name);
        }
    }
    return this;
};
