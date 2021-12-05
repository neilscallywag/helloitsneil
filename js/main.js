(function($) {


    //Navigation

    var app = function() {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            nav = document.querySelector('.nav__content');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function() {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
            else element.classList.add(stringClass);
        };
        init();
    }();


})(jQuery);
$(window).load(function() {
    $(function() {
        if (!sessionStorage.getItem("runOnce")) {

            window.mobileAndTabletCheck = function() {
                var cursor = document.querySelector('.cursor');
                var follower = document.querySelector('.follower');
                var toggleClass = function toggleClass(element, stringClass) {
                    if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
                    else element.classList.add(stringClass);
                };
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    toggleClass(cursor, 'hide'),
                        toggleClass(follower, 'hide');
                }
            };

            let post_header = document.querySelectorAll('#post');
            let fp = document.querySelectorAll('.post__first');
            let sp = document.querySelectorAll('.post__second');

            const cont = new ScrollMagic.Controller();

            sp.forEach(y => {
                let timeline = new TimelineMax();
                let pp = y.querySelector('.post__h1');
                let pl = y.querySelectorAll('li');


                timeline.
                from(pp, 1, {
                    x: -50,
                    autoAlpha: 0,
                    ease: Expo.ease
                }).

                from(pl, .3, {
                    x: 30,
                    autoAlpha: 0,
                    ease: Expo.ease
                });

                const scene = new ScrollMagic.Scene({
                    triggerElement: y,
                    triggerHook: .5,
                    reverse: true
                }).


                setTween(timeline).
                addTo(cont);
            });

            const control = new ScrollMagic.Controller();

            fp.forEach(x => {
                let timeline = new TimelineMax();
                let pt = x.querySelector('.post__h1');
                let pc = x.querySelector('p');


                timeline.
                from(pt, 1, {
                    x: -50,
                    autoAlpha: 0,
                    ease: Expo.ease
                }).

                from(pc, .3, {
                    x: 30,
                    autoAlpha: 0,
                    ease: Expo.ease
                });

                const scene = new ScrollMagic.Scene({
                    triggerElement: x,
                    triggerHook: .5,
                    reverse: true
                }).


                setTween(timeline).
                addTo(control);
            });
            const controller = new ScrollMagic.Controller();

            post_header.forEach(head => {
                let timeline = new TimelineMax();
                let heading = head.querySelector('h3');
                let postContent = head.querySelector('p');
                let link = head.querySelector('.link');
                let counter = head.querySelector('.counter');
                let image = head.querySelector('.image');

                timeline.
                from(counter, .5, {
                    x: 30,
                    autoAlpha: 0,
                    ease: Expo.ease
                }).


                from(image, .9, {
                    x: -30,
                    autoAlpha: 0,
                    ease: Expo.ease
                }).


                from(heading, .3, {
                    y: 30,
                    autoAlpha: 0,
                    ease: Expo.ease
                }).


                from(postContent, .3, {
                    y: 30,
                    autoAlpha: 0,
                    ease: Expo.ease
                }).


                from(link, .3, {
                    x: 30,
                    autoAlpha: 0,
                    ease: Expo.ease
                });


                const scene = new ScrollMagic.Scene({
                    triggerElement: head,
                    triggerHook: .5,
                    reverse: true
                }).


                setTween(timeline).
                addTo(controller);


            });

            sessionStorage.setItem("runOnce", true);
        }
    });
});


"use strict";
let cursor = $(".cursor"),
    follower = $(".follower"),
    cWidth = 8,
    fWidth = 48,
    delay = 10,
    mouseX = 0,
    mouseY = 0,
    posX = 0,
    posY = 0;
TweenMax.to({}, .001, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / delay,
                posY += (mouseY - posY) / delay,
                TweenMax.set(follower, {
                    css: {
                        left: posX - fWidth / 2,
                        top: posY - fWidth / 2
                    }
                }),
                TweenMax.set(cursor, {
                    css: {
                        left: mouseX - cWidth / 2,
                        top: mouseY - cWidth / 2
                    }
                })
        }
    }),
    $(document).on("mousemove", function(e) {
        mouseX = e.clientX,
            mouseY = e.clientY
    }),
    $("a").on({
        mouseenter: function() {
            cursor.addClass("is-active"),
                follower.addClass("is-active")
        },
        mouseleave: function() {
            cursor.removeClass("is-active"),
                follower.removeClass("is-active")
        }
    });
console.log(sessionStorage);
setTimeout(function() { sessionStorage.clear(); console.log(sessionStorage); }, (60*60 *1000)); 