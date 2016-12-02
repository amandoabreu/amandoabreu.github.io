jQuery(document).ready(function($){

    var centerWrapperScreens = document.getElementsByClassName('centerwrapper--screen');
    var oldScroll = 0;
    var body = $('.body');
    var page = $('.page');

    var w = $(window);
    w.scroll(function(e) {
        var newScroll = $(this).scrollTop();
        if(oldScroll < newScroll && newScroll > 60){
            body.addClass('body--reading');
        } else {
            body.removeClass('body--reading');
        }
        oldScroll = newScroll;

        //$('.main-nav').css('top', newScroll + 60);
    });

    var addScrollToMenuIfNeeded = function(e){ // hacky as fuck menu fix
        var mainNav = $('.main-nav');
        var mainNavheight = mainNav[0].scrollHeight;
        var windowHeight = w.height();
        console.log('w: '+windowHeight+' m: '+mainNavheight);
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
        body.removeClass('body--search-active');
        body.toggleClass('body--burger-active');
    };

    var toggleSearch = function(){
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
        var device = $(this).data('switch-to');
        carouselItems.removeClass('carousel__item--active');
        $('.carousel__item--' + device).addClass('carousel__item--active');
        reloadSliders();
    });
    var disqus_developer = 1;

});
