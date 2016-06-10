	(function () {
			[].slice.call(document.querySelectorAll('.menu')).forEach(function (menu) {
	        var menuItems = menu.querySelectorAll('.menu__link'),
	            setCurrent = function (ev) {
	                ev.preventDefault();

	                var item = ev.target.parentNode; // li

	                // return if already current
	                if (classie.has(item, 'menu__item--current')) {
	                    return false;
	                }
	                // remove current
	                classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
	                // set current
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


	// small screen nav bar

	$(".navT").on("click", function () {
	    $(this).toggleClass("active");
	    $("#menu").toggleClass("open");
	    $(".content").toggleClass("shift");


	})






	//animated text

	// function([string1, string2],target id,[color1,color2])
	consoleText(['code cool websites.', 'build trendy mobile apps', 'enjoy learning.', 'read in spare time', 'like everything zombie related'], 'text', ['#444444', '#444444', '#444444']);

	function consoleText(words, id, colors) {
	    if (colors === undefined) colors = ['#444444'];
	    var visible = true;
	    var con = document.getElementById('console');
	    var letterCount = 1;
	    var x = 1;
	    var waiting = false;
	    var target = document.getElementById(id)
	    target.setAttribute('style', 'color:' + colors[0])
	    window.setInterval(function () {
	            if (letterCount === 0 && waiting === false) {
	                waiting = true;
	                target.innerHTML = words[0].substring(0, letterCount)
	                window.setTimeout(function () {
	                    var usedColor = colors.shift();
	                    colors.push(usedColor);
	                    var usedWord = words.shift();
	                    words.push(usedWord);
	                    x = 1;
	                    target.setAttribute('style', 'color:' + colors[0])
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
	        // underscore blinking function
	    window.setInterval(function () {

	        //	        if (visible === true) {
	        //	            con.className = 'console-underscore hidden'
	        //	            visible = false;
	        //
	        //	        } else {
	        //	            con.className = 'console-underscore'
	        //
	        //	            visible = true;
	        //	        }
	    }, 400)
	}




	//scroll effect on navigating to other pages

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




	//small & medium screen form

	// Input Lock
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
