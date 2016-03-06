/* ================================================================= */
// Description:         Klippy, clippy's cousin
// Comment:             No dependencies!
// Last modified:       06-03 2016
// Author:              Dimitri Gogios
/* ================================================================= */
klippy = function ($) {

    function klippy() {
        var dataExpire = parseInt($('.klippy').data('expire'));
        if(isNaN(dataExpire)) {
            dataExpire = 7;
        }
        var txt = $('.klippy').html().trim();

        $('.klippy').html('<div class="img-klippy"><div data-src="http://dimitrigogios.com/properties/images/klippy.png" data-alt="Hello I\'m Klippy"></div></div>');
        $('.klippy').prepend('<div class="bubble">'+txt+'<hr><button class="ok">Ok</button><button class="cancel">cancel</button><span></span></div>');
        
        var element = $('.img-klippy');
        var i, len, attr;
        var img = new Image();
        var placehold = element[0].children[0];

        element.className+= 'block is-loading';

        img.onload = function() {
            //element.className = element.className.replace('is-loading', 'is-loaded');
            element[0].replaceChild(img, placehold);
        };

        for (i = 0, len = placehold.attributes.length; i < len; i++) {
            attr = placehold.attributes[i];

            if (attr.name.match(/^data-/)) {
                img.setAttribute(attr.name.replace('data-', ''), attr.value);
                //img.addClass('responsive');
                img.setAttribute('itemprop','image');
            }
        }

        if( $.cookie('klippyCookie') ) {
            var value = JSON.parse($.cookie('klippyCookie'));
            if( value === true ) {
                //console.log('is true');
                $('.klippy').remove();
            } else {
                //console.log('is false');
                $('.klippy').removeAttr('style');
                setTimeout(function() {
                    $('.klippy').addClass('show');
                }, 1000);
            }
        } else {
            $('.klippy').removeAttr('style');
            setTimeout(function() {
                $('.klippy').addClass('show');
            }, 1000);
        }


        $('.klippy button.ok').on('click', function() {
            //console.log('button ok');
            $.cookie('klippyCookie', true, { expires: dataExpire, path: '/' });
            $('.klippy').remove();
        });
        $('.klippy button.cancel').on('click', function() {
            //console.log('button cancel');
            $.cookie('klippyCookie', false, { expires: -1, path: '/' });
            $('.klippy').addClass('close');
        });
    }

    this.func = {
        klippy: function() {
            return klippy();
        }
    };

    // public functions
    return func;

}(jQuery);
(function() {

    var link_tag = document.createElement('link');
        link_tag.setAttribute("rel","stylesheet");
        link_tag.setAttribute("href",
            "http://dev.dimitrigogios.com/properties/css/klippy.css");
        
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(link_tag);


    if ($.cookie) {
        main();
    } else {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src",
            "https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js");
        
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);

        main();
    }


    /******** Our main function ********/
    function main() {
        $(function () {
            klippy.klippy();
        });
    }

})(); // We call our anonymous function immediately