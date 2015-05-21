(function (global, document) {
    'use strict';
    var ImageCard = function (element) {
        var self = this;
        this.element = element;
        this.src = element.src;
        this.open = function () {
            if (document.documentElement.clientWidth >= 768) {
                TINY.box.show({
                    image: self.src,
                    boxid: 'frameless',
                    animate: true
                    // openjs: function () {}
                });
            } else {
                global.location.href = self.src;
            }
        };
        this.element.onclick = function () {
            self.open();
        };
    };

    function init() {
        var imageCardElements = document.getElementsByClassName("img-card"),
            len = imageCardElements.length,
            i = 0,
            _imageCard = null;
        for (i = 0; i < len; i++) {
            _imageCard = new ImageCard(imageCardElements[i]);
        }
    }
    global.onload = init;
}(this, this.document));
