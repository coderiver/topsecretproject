head.ready(function() {
	$('body').addClass('animateme');

	$('.header__logo').click(function(event) {
		$('.header__logoswitch').toggleClass('is-open');
	});


	$('.help__sidebar a').click(function(event) {
		$('.help__sidebar a').removeClass('is-active');
		$(this).addClass('is-active');
		hr = $(this).attr('href');
		$('.q').show();
		$('.text,.q-answer').hide();
		$(' '+hr).show();
		return false
	});

	$('.q a').click(function(event) {
		$('.help__sidebar a').removeClass('is-active');
		$(this).addClass('is-active');
		hr = $(this).attr('href');
		$('.q-answer,.q').hide();
		$(' '+hr).show();
		return false
	});

	$('.help__back').click(function(event) {
		$('.q').show();
		$('.q-answer').hide();
		return false;
	});



	$('.scr__paywithtabs a').click(function(event) {
		if($(this).hasClass('is-active')){}
		else{
			$('.scr__paywithtabs a').toggleClass('is-active');
			$('.bb').toggle();
		}
		return false;
	});
	$('.header__tumblr').click(function(event) {
		$(this).toggleClass('is-on');
		$('.header__balancevalue').fadeToggle();
	});

	$(document).click(function(event) { 
	    if(!$(event.target).closest('.hprofile').length) {
	        if($('.hprofile').hasClass("is-open")) {
	            $('.hprofile').toggleClass('is-open');
	        }
	    }        
	})
	$('.hprofile__accounts').click(function(event) {
		$('.hprofile').toggleClass('is-open');
	});
	$('.hprofile__user').click(function(event) {
		$('.hprofile').addClass('is-open');
	});
	

	$('.header__balancevalue').click(function(event) {
		$('.header__balance').toggleClass('is-active');
		// $(this).addClass('is-active');
	});

	$('.overlay').height($(document).height() - 70);
	$(window).resize(function(event) {
		$('.overlay').height($(document).height() - 70);
	});

	$('.js-popup').click(function(event) {
		$('.popup').removeClass('is-shown');
		pop = $(this).data('popup');
		$('#'+pop).addClass('is-shown')
		$('.overlay').fadeIn();
		return false;
	});

	$('.popup__close,.overlay').click(function(event) {
		$('.popup').removeClass('is-shown')
		$('.overlay').fadeOut();
	});

	$('.selectbank').click(function(event) {
		$(this).toggleClass('is-open');
	});
	$('.input__currency_drop').click(function(event) {
		$(this).toggleClass('is-opendrop');
	});

	$(document).on("scroll", onScroll);

	//smoothscroll
	$('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
	    $(document).off("scroll");
	    
	    $('.settings__nav a').each(function () {
	        $(this).removeClass('is-active');
	    })
	    $(this).addClass('is-active');
	  
	    var target = this.hash,
	        menu = target;
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-180
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	        $(document).on("scroll", onScroll);
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.settings__nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top - 200 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.settings__nav a').removeClass("is-active");
	            currLink.addClass("is-active");
	        }
	        else{
	            currLink.removeClass("is-active");
	        }
	    });
	}


	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	       // alert("bottom!");
	       $('body').addClass('is-bottom');
	   }
	});


	$('.js-tabs a').click(function(event) {
		$('.toggleme').hide();
		$('.js-tabs a').removeClass('is-active');
		$(this).addClass('is-active');
		$(''+$(this).attr('href')).show();
		// idd = $(this).attr('href');
		// alert(idd.substring(1));
		return false;
	});
});