var site = function(){
    var _ = this;
    _.state = {
        navOpen: false
    };

    _.state.modify = function(intent, element, state){
        _.state[intent] = state;
        _.elements[element].classList.add(_.classes.body.navOpen);
        console.log('Modified');

    };
    _.elements = {
        body: document.body,
        page: $('.page'),
        centerWrapperScreens: document.getElementsByClassName('centerwrapper--screen')
    };
    _.classes = {};

    _.classes.body = {
        reading: 'body--reading',
        navOpen: 'body--burger-active',
        searchOpen: 'body--search-active'
    };

    _.classes.nav = {
        scroll: 'main-nav--scroll'
    };

    _.openNav = function(){
        //_.elements.body.classList.add(_.classes.body.navOpen);
        //_.state.navOpen = true;
        _.state.modify('navOpen', 'body', true);
    };

    _.closeNav = function(){
        _.elements.body.classList.remove(_.classes.body.navOpen);
        _.state.navOpen = false;
    };

    _.toggleNav = function(){
        if(_.state.navOpen == true){
            _.closeNav();
        } else {
            _.openNav();
        }
    };

};



   /* var app = new site();
    app.openNav();
*/
jQuery(document).ready(function($){
    var centerWrapperScreens = document.getElementsByClassName('centerwrapper--screen');
    var oldScroll = 0;
    var body = $('.body');
    var page = $('.page');

    var skillBars = $('.skill-bar');
    var contactPopup = $('#contact-popup');

    var oldTouch = 0;
    var delay = 100;
    var margin = 100;
    if(contactPopup.length > 0){
      ouibounce(contactPopup[0]);
    }
    contactPopup.click(function(){
      $(this).hide();
    });
    $('.contact-popup__content').click(function(e){
      e.stopPropagation();
    });
    $('body').on('touchmove', function(e){
        if($(this).hasClass('body--burger-active')) {
            oldTouch = e.originalEvent.touches[0].clientX;
            window.setTimeout(function () {
                console.log('X: ' + e.originalEvent.touches[0].clientX);
                console.log('oldTouche: ' + oldTouch);
                console.log((oldTouch + margin));
                if (oldTouch + margin < e.originalEvent.touches[0].clientX) {
                    $('body').removeClass('body--burger-active');
                }
            }, delay);
        }
    });

    var w = $(window);
    w.scroll(function(e) {
        var newScroll = $(this).scrollTop();
        if(oldScroll < newScroll && newScroll > 60){
            body.addClass('body--reading');
        } else {
            body.removeClass('body--reading');
        }
        oldScroll = newScroll;

        /*$('.main-nav').css('top', newScroll + 60);*/
    });

    var addScrollToMenuIfNeeded = function(e){ /* hacky as fuck menu fix */
        var mainNav = $('.main-nav');
        var mainNavheight = mainNav[0].scrollHeight;
        var windowHeight = w.height();
        if(mainNavheight > windowHeight) {
            mainNav.addClass('main-nav--scroll');
        } else {
            mainNav.removeClass('main-nav--scroll');
        }
    };

    addScrollToMenuIfNeeded();

    w.resize(function(){
        addScrollToMenuIfNeeded();
    });

    var toggleMenu = function(){
        if(!body.hasClass('body--burger-active')){
            ga('send', {
                hitType: 'event',
                eventCategory: 'Menu',
                eventAction: 'openMenu'
            });
        } else {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Menu',
                eventAction: 'closeMenu'
            });
        }
        body.removeClass('body--search-active');
        body.toggleClass('body--burger-active');
    };

    var toggleSearch = function(){
        if(!body.hasClass('body--search-active')){
            ga('send', {
                hitType: 'event',
                eventCategory: 'Search',
                eventAction: 'openSearch'
            });
        } else {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Search',
                eventAction: 'closeSearch'
            });
        }
        body.removeClass('body--burger-active');
        body.toggleClass('body--search-active');
    };

    var closeSidebars = function(){
        body.removeClass('body--burger-active');
        body.removeClass('body--search-active');
    }

    body.mousemove(function(e){
        if(window.lastX !== e.clientX || window.lastY !== e.clientY){
            body.removeClass('body--reading');
        }
        window.lastX = e.clientX;
        window.lastY = e.clientY;
    });

    $('.top-nav__burger').click(function(){
        toggleMenu();
    });

    $('.top-nav__search').click(function(){
        toggleSearch();
    });


    if(centerWrapperScreens.length > 0){
        [].forEach.call(centerWrapperScreens, function(e, i, a){
            var parent = e.parentNode;
            var space = document.createElement('div');
            space.classList.add('space');
            space.style.height = e.offsetHeight + 11 + 'px';
            // set the wrapper as child (instead of the element)
            parent.replaceChild(space, e);
            space.appendChild(e);
        });
        window.addEventListener('resize', function(){
            var spaces = document.getElementsByClassName('space');
            [].forEach.call(spaces, function(e,i,a){
                e.style.height = e.children[0].offsetHeight + 'px';
            });
        });
    }

    $('.bx-pager-link').click(function(e){
        e.preventDefault();
    });

    page.click(function(){
       closeSidebars();
    });

    $('.accordion__toggle').click(function(){
        var parent = $(this).parent();
        if(!parent.hasClass('accordion__item--open')){
            ga('send', {
                hitType: 'event',
                eventCategory: 'Accordion',
                eventAction: 'openTab',
                eventLabel: $(this).data('toggle')
            });
        } else {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Accordion',
                eventAction: 'closeTab',
                eventLabel: $(this).data('toggle')
            });
        }
        parent.toggleClass('accordion__item--open');

    });

    var initSliders = function(){
        $('.carousel__item').slick({
            autoplay: true,
            mobileFirst: true,
            nextArrow: '<button type="button" class="slick-next fa fa-arrow-right" title="Carousel next"></button>',
            prevArrow: '<button type="button" class="slick-prev fa fa-arrow-left" title="Carousel previous"></button>'

        });
    };

    var reloadSliders = function(){
        $('.carousel__item').slick('unslick');
        initSliders();
    };

    initSliders();

    var deviceSelectors = $('.device-selector__item');
    var carouselItems = $('.carousel__item');
    deviceSelectors.click(function(){
        var title = $(this).attr('title');
        ga('send', {
            hitType: 'event',
            eventCategory: 'Device Selector',
            eventAction: 'switchDevice',
            eventLabel: title
        });
        var device = $(this).data('switch-to');
        carouselItems.removeClass('carousel__item--active');
        $('.carousel__item--' + device).addClass('carousel__item--active');
        reloadSliders();
    });
    var disqus_developer = 1;

    $('.sharebox__fbShare').on('click', function() {
        FB.ui({
            method: 'share',
            mobile_iframe: true,
            href: $(this).data("url"),
        }, function(response){});
    });

    $contactForm = $("#contactForm");
    $contactForm.on('submit', function(e) {
        $.ajax({
            url: '//formspree.io/amando.abreu@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
            },
            success: function(data) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--success">Message sent!</div>');
            },
            error: function(err) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
            }
        });
        e.preventDefault();
    });

    var cardAccordionTitles = document.querySelectorAll('.card__accordion__title');
    for(var i = 0; i < cardAccordionTitles.length; i++){
        (function(i){
            cardAccordionTitles[i].addEventListener('click', function(){
                this.parentNode.classList.toggle('card__accordion--active');
            });
        })(i);
    }

    function isScrolledIntoView(elemr)
    {
      var docViewTop = w.scrollTop();
      var docViewBottom = docViewTop + w.height();

      var elemTop = elemr.offset().top;
      var elemBottom = elemTop + elemr.height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    if(skillBars.length > 0){
      w.scroll(function(){
        skillBars.each(function(){ // Lol performance
          var dis = $(this);
          if(isScrolledIntoView(dis)){
            dis.animate({
                width: dis.attr('data-skill-level')+'%'
            }, 1000, function(){

            }).delay(100);
          }
        });
      });
    }

});
