(function () {
    [].slice.call(document.querySelectorAll('.menu')).forEach(function (menu) {
        var menuItems = menu.querySelectorAll('.menu__link'),
            setCurrent = function (ev) {
                var item = ev.target.parentNode;
                if (classie.has(item, 'menu__item--current')) {
                    return false;
                }
                classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
                classie.add(item, 'menu__item--current');
            };
        [].slice.call(menuItems).forEach(function (el) {
            el.addEventListener('click', setCurrent);
        });
    });
    [].slice.call(document.querySelectorAll('.link-copy')).forEach(function (link) {
        link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
        new Clipboard(link);
        link.addEventListener('click', function () {
            classie.add(link, 'link-copy--animate');
            setTimeout(function () {
                classie.remove(link, 'link-copy--animate');
            }, 300);
        });
    });
})(window);
$(".navT").on("click", function () {
    $(this).toggleClass("active");
    $("#menu").toggleClass("open");
    $(".content").toggleClass("shift");
})
consoleText(['make cool websites.', 'build trendy mobile apps', 'enjoy learning.', 'read in spare time', 'like everything zombie related'], 'text', '#000');

function consoleText(words, id, color) {
    if (color === undefined) color = '#444444';
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + color)
    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                letterCount += x;
                waiting = false;
            }, 1500)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {}, 400)
}
$(document).foundation()
$('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('textarea + label + span').css({
                'opacity': 1
            });
        } else {
            $this.removeClass('focused');
            $('textarea + label + span').css({
                'opacity': 0
            });
        }
    });
});
$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:first-child input + label + span').css({
                'opacity': 1
            });
        } else {
            $this.removeClass('focused');
            $('.field:first-child input + label + span').css({
                'opacity': 0
            });
        }
    });
});
$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:nth-child(2) input + label + span').css({
                'opacity': 1
            });
        } else {
            $this.removeClass('focused');
            $('.field:nth-child(2) input + label + span').css({
                'opacity': 0
            });
        }
    });
});
(function (window) {
    'use strict';

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var hasClass, addClass, removeClass;
    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }
    var classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    if (typeof define === 'function' && define.amd) {
        define(classie);
    } else {
        window.classie = classie;
    }
})(window);
