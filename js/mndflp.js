$(document).ready(function(){
    var desktopSlider, tabletSlider, mobileSlider, modal;
    function showDevice(device){
        $('.slider-wrapper').hide();
        $('.'+device+'-slider').fadeIn('fast');
    }
    function reloadSliders(){
        if(typeof desktopSlider !== 'undefined'){
            desktopSlider.reloadSlider();
        }
        if(typeof tabletSlider !== 'undefined'){
            tabletSlider.reloadSlider();
        }
        if(typeof mobileSlider !== 'undefined'){
            mobileSlider.reloadSlider();
        }
    }
    function initSliders(){
        if(typeof desktopSlider !== 'undefined'){
            desktopSlider.destroySlider();
        }
        if(typeof tabletSlider !== 'undefined'){
            tabletSlider.destroySlider();
        }
        if(typeof mobileSlider !== 'undefined'){
            mobileSlider.destroySlider();
        }
        if($(modal+" .desktop-slider .bxslider.portfolio-item").length > 0){
            desktopSlider = $(modal+" .desktop-slider .bxslider.portfolio-item").bxSlider({
                auto:true
            });
        }
        if($(modal+" .tablet-slider .bxslider.portfolio-item").length > 0){
            tabletSlider = $(modal+" .tablet-slider .bxslider.portfolio-item").bxSlider({
                auto:true
            });
        }
        if($(modal+" .mobile-slider .bxslider.portfolio-item").length > 0){
            mobileSlider = $(modal+" .mobile-slider .bxslider.portfolio-item").bxSlider({
                auto:true
            });
        }
    }
    function triggerModal(modal_id, handler){
        if(modal_id === null){
            title = $(handler.attr('data-toggle-modal')).children('.inner').children('h1').text();
            modal_id = handler.attr('data-toggle-modal');
            window.location.hash = modal_id;
            modal = handler.attr('data-toggle-modal');
        } else {
            title = $(modal_id).children('.inner').children('h1').text();
            modal = modal_id;
        }
        showDevice('desktop');
        if($(modal_id).hasClass('modal-info')){
            document.title = 'Amando Filipe :: CV';
        } else {
            document.title = 'Portefólio :: '+title;
        }
        $(modal).fadeIn('fast');
        $('body').addClass('modal-visible');
        initSliders();
    }
    title = document.title;$(".bxslider.auto").bxSlider({
        auto:true
    });
    modal = 0;


    $('.trigger-modal').click(function(){
        triggerModal(null, $(this));
    });
    $('.close-modal').click(function(){
        $(this).parent().fadeOut('fast');
        $('body').removeClass('modal-visible');
        document.title = default_title;
        window.location.hash = '';
    });
    $('.open .child').show('fast');
    $('.accordion__toggle').click(function(){
        var parent = $(this).parent();
        parent.toggleClass('accordion__item--open');
    });

    $('.device-select-item').click(function(){
        device = $(this).attr('data-switch-to');
        showDevice(device);
        reloadSliders();
    });

    $('.phone-n').click(function(){
        phone = $(this);
        prev_txt = phone.html();
        phone.html('<a href="tel:+351911753568">+351 911 753 568</a>');
    });
    $('.skills-and-stuff').click(function(){
        $('.skill-bar').each(function(){
            $(this).animate({
                width: $(this).attr('data-skill-level')+'%'
            }, 1000, function(){

            }).delay(100);
        });
    });
    $('.js-trigger-nav').click(function () {
        $(this).children('.fa').toggleClass('fa-align-justify fa-close');
        $('body').toggleClass('nav-visible');
    });
    $('.over-content').click(function(){
        $('.trigger-nav').children('.fa').removeClass('fa-close').addClass('fa-align-justify');
        $('body').toggleClass('nav-visible');
    });

    /* Safari fix */
    if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1 && navigator.userAgent.indexOf('iPhone') === -1) {
        $('.item-span-2 .inner').css('margin', '-2.5% -1.4%');
    }
});