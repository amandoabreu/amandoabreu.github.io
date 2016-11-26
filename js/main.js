jQuery(document).ready(function($){
    var centerWrapperScreens = document.getElementsByClassName('centerwrapper--screen');
    var oldScroll = 0;
    var body = $('.body');

    /* TODO Only show menu when mouse leaves imaginary circle */
    $(window).scroll(function(e) {
        var newScroll = $(this).scrollTop();
        if(oldScroll < newScroll){
            body.addClass('body--reading');
        } else {
            body.removeClass('body--reading');
        }
        oldScroll = newScroll;
    });

    body.mousemove(function(e){
        if(window.lastX !== e.clientX || window.lastY !== e.clientY){
            body.removeClass('body--reading');
        }
        window.lastX = e.clientX;
        window.lastY = e.clientY;
    });

    $('.top-nav__burger').click(function(){
        body.removeClass('body--search-active');
        body.toggleClass('body--burger-active');
    });

    $('.top-nav__search').click(function(){
        body.removeClass('body--burger-active');
        body.toggleClass('body--search-active');
    });


    if(centerWrapperScreens.length > 0){
        [].forEach.call(centerWrapperScreens, function(e, i, a){
            var parent = e.parentNode;
            var space = document.createElement('div');
            space.classList.add('space');
            space.style.height = e.offsetHeight + 'px';
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
});
