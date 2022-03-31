/* Template: Depilex Theme | Author: Fluent-Themes */
/*----------------------------------------------------------*/
(function($) {

"use strict";

jQuery(document).ready(function($){

    /* ======= Full Screen Background ======= */

    $(".full-page").height($(window).height());
    $(window).resize(function() {
        $(".full-page").height($(window).height());
    });

 	/* ======= Page Scrolling Plugin ======= */
	
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    /* ======= Dropdown Menu On Hover ======= */

    $.fn.bootstrapDropdownHover();

	/* ======= Sticky Menu  ======= */
	
    $(window).scroll(function(){
        if ($(window).scrollTop() > 10){
            $('.navbar-default').addClass("sticky");
        }else{
            $('.navbar-default').removeClass("sticky");
        }
    });
	
	/* ======= Accordions ======= */
   
    var allPanels = $(".accordion > dd").hide();
    allPanels.first().slideDown("easeOutExpo");
    $(".accordion > dt > a").first().addClass("active");

    $(".accordion > dt > a").click(function() {

        var current = $(this).parent().next("dd");
        $(".accordion > dt > a").removeClass("active");
        $(this).addClass("active");
        allPanels.not(current).slideUp("easeInExpo");
        $(this).parent().next().slideDown("easeOutExpo");
        return false;
    });


    /* ======= Revolution slider  ======= */
    if ($('.tt-banner').length > 0) {
        jQuery(".tt-banner").revolution({
            delay: 10000,
            startwidth: 1170,
            startheight: 500,
            onHoverStop: "off",
            hideThumbs: 10,
            hideTimerBar: "on",
            navigationType: "none",
            navigationStyle: "preview1",
            fullWidth: "off",
            fullScreen: "on",
            fullScreenOffsetContainer: ""
        });
    }


    /* ======= Counter  ======= */
    function countUp() {
        var dataperc;
        $('.statistic-percent').each(function() {
            dataperc = $(this).attr('data-perc'),
                $(this).find('.percentfactor').delay(6000).countTo({
                    from: 0, // number to begin counting
                    to: dataperc,
                    speed: 1000, // ms
                    refreshInterval: 10,
                });
        });
    }
    $('.statistic-percent').waypoint(function() {
        countUp();
    }, {
        offset: '95%',
        triggerOnce: true
    });


    /* === magnificPopup === */
    $(window).on('load', function() {
        $('.tt-lightbox').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false
                // other options
        });
        /* ======= shuffle js ======= */
        if ($('#portfolio-grid').length > 0) {
            /* initialize shuffle plugin */
            var $grid = $('#portfolio-grid');

            $grid.shuffle({
                itemSelector: '.portfolio-item' // the selector for the items in the grid
            });

            /* reshuffle when user clicks a filter item */
            $('#filter li').on('click', function(e) {
                e.preventDefault();

                // set active class
                $('#filter li').removeClass('active');
                $(this).addClass('active');

                // get group name from clicked item
                var groupName = $(this).attr('data-group');

                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }

    });
	
	
	// Contact Form ajax

    var eForm = jQuery('#contact-form');
    var spinner = jQuery('.spinner');

    eForm.find('#submit').click(function(e){
        e.preventDefault();
        jQuery('#contactsMsgs').html('');
        spinner.show();
        var errmsg;
        errmsg = '';

        if(errmsg){
            jQuery('#contactsMsgs').html('<p class="nc-response">' + errmsg + '</p>');
            spinner.hide();
        }else{
            
            var url = eForm.attr('action');
            
            var data = eForm.serialize();
                   
            jQuery.ajax({
                url: url,
                method: 'POST',
                data: data,
                error: function(data) {
                    jQuery('#contactsMsgs').html('<p class="nc-response">Error while ajax request</p>');
                    spinner.hide();
                },
                success : function(data){
                    if (data.status == 'success') {
                        jQuery('#contactsMsgs').html('<p class="icon-ok mc-response">Thank you, your email has been sent</p>');
                        eForm.find("input[type=text], textarea").val("");
                    }else{
                        jQuery('#contactsMsgs').html('<p class="nc-response">Please try again</p>');
                    }
                    spinner.hide();
                    //closeParentBtn();
                }
            });
            
        }

    });

    //form action
    function formResult(element,data) {
        $('#'+element).next('.result').html(data);
        $('#'+element+' input').val('');
    }

    function onSubmit(element) {
        $('#'+element).submit(function() {
            var action = $(this).attr('action');
            loading();
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    email: $('#'+element+' input[type="email"]').val(),
                    name: $('#'+element+' input[type="text"]').val()
                },
                success: function(data) {
                    formResult(data);
                },
                error: function(data) {
                    formResult(data);
                }
            });
            return false;
        });
    }
    onSubmit('sign-up-frm');
    onSubmit('newsletter-frm');
	
	//Having a down arrow after every parent menu which got sub-menus
    $('.navbar-nav a').each(function() {
        if ( $(this).parent('li').children('ul').length ) {
            $(this).append(' <span class="fa fa-angle-down"></span>');
        }           
    });
	//Having a class 'dropdown-toggle' for every parent menu a item which got sub-menus
    if($(window).width() < 768){
    $('.navbar-nav a').each(function() {
        if ( $(this).parent('li').children('ul').length ) {
            $(this).addClass('dropdown-toggle');
        }           
    });}
	//Inserting new attributes (ex: data-toggle="dropdown") in every parent menu a item which got dropdown-toggle class
	$(".dropdown-toggle").attr("data-toggle", "dropdown");
	$(".dropdown-toggle").attr("data-hover", "dropdown");
	$(".dropdown-toggle").attr("data-delay", "1000");
	$(".dropdown-toggle").attr("data-close-others", "true");
	//Having a class 'dropdown' for every parent menu which got sub-menus
	jQuery('.menu-item-has-children').addClass('dropdown').removeClass('menu-item-has-children');
	//Replacing contact form 7 classes with theme classes
	jQuery('.wpcf7-form-control').addClass('form-control').removeClass('wpcf7-form-control');
	jQuery('.wpcf7-form-control-wrap').addClass('form-group').removeClass('wpcf7-form-control-wrap');
	jQuery('.wpcf7-submit').addClass('btn btn-primary').removeClass('wpcf7-submit');
	jQuery('.form-control.btn-primary').removeClass('form-control');
});

}(jQuery));