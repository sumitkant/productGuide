'use strict';
$(document).ready(function () {
    var payLoad = $('#contentarea');
    payLoad.hide().load('files/welcome.html', function () {
        $(this).fadeIn('slow');
    });

    var itemselector = $('#contents a');
    itemselector.on('click', function () {
        var $this = $(this);
        if ($this.hasClass('active')) {
            return;
        } else {
            $('a.active').removeClass('active'); // remove class of the active anchor tag
            $this.addClass('active'); // aad active class to clicked one

            // determine the folders and filename
            var clickedText = this.innerText,
                foldername,
                filename;
            if ($this.hasClass('ui-accordion-header')) {
                foldername = clickedText.substr(0, clickedText.indexOf(' '));
                payLoad.hide().load('files/' + foldername + '/' + foldername + '.html', function () {
                    $(this).fadeIn('slow');
                });
            } else {
                var parentText = $this.parent().parent().find('a.list-group-item')[0].innerText;
                foldername = parentText.substr(0, parentText.indexOf(' '));
                console.log(foldername);
                filename = clickedText.toLowerCase().replace(/\s/g, '') + '.html';
                var loadfile = 'files/' + foldername + '/' + filename;
                payLoad.hide().load(loadfile, function () {
                    $(this).fadeIn('slow');
                });
            }

            // initializing the video


        }
    }); // clicking on the contents

    // initializing the accordion
    $('.accordionmenu').accordion({
        collapsible: true,
        heightStyle: "content",
        active: false,
        animate: 300
    });
});