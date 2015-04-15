'use strict';

$(document).ready(function () {
    var mediaPlayer = $('.media-video'),
        controls = $('.media-controls');
    mediaPlayer.controls = false;

    $('.playbutton').on('click', function () {
        mediaPlayer.get(0).play();
        controls.fadeOut('slow');
    });
});