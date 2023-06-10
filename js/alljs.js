//marquee js start
$('.marquee-with-options').marquee({
    //speed in milliseconds of the marquee
    duration:15000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
	pauseOnHover: true,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
});
//marquee js end
//* owl  start*/
  
  $(document).ready(function() {
      $("#owl-testimonial").owlCarousel({
       autoPlay:4000,
		autoplayHoverPause:true,
		stopOnHover:true,
        items :2, 
        pagination :false ,
		 navigation :true,
     itemsDesktop : [1199,2],
       itemsDesktopSmall : [979,1],
	   itemsTabletSmall: [979,1],
 		itemsMobile : [479,1]	
      });
	   
      $("#owl-demo").owlCarousel({
       autoPlay:4000,
		autoplayHoverPause:true,
		stopOnHover:true,
        items :4, 
        pagination :false ,
		 navigation :true,
     itemsDesktop : [1199,4],
       itemsDesktopSmall : [979,3],
	   itemsTabletSmall: [979,2],
 		itemsMobile : [479,1]	
      });
	 
	$("#owl-demonew2").owlCarousel({
        autoPlay:4000,
		autoplayHoverPause:true,
		stopOnHover:true,
        items : 1, 
        pagination :true ,
		 navigation :true  ,
     itemsDesktop : [1199,1],
       itemsDesktopSmall : [979,1],
	   itemsTabletSmall: [979,1],
 		itemsMobile : [479,1]		
      }); 
	   
	$("#owl-demonew3").owlCarousel({
        autoPlay:3000,
		autoplayHoverPause:true,
		stopOnHover:true,
        items :3,  
         pagination :false ,
		 navigation :true ,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
		itemsTablet:[768,2],
		itemsMobile : [479,1]			
      });
	  $("#owl-demonew4").owlCarousel({
        autoPlay:4000,
		autoplayHoverPause:true,
		stopOnHover:true,
        items : 3, 
        pagination :false ,
		 navigation :true  ,
     itemsDesktop : [1199,3],
       itemsDesktopSmall : [979,3],
	   itemsTabletSmall: [979,2],
 		itemsMobile : [479,1]		
      });
	  $("#owl-demonew4a").owlCarousel({
        autoPlay:4000,
		autoplayHoverPause:true,
		stopOnHover:true,
        items : 3, 
        pagination :true,
		 navigation :false,
     itemsDesktop : [1199,3],
       itemsDesktopSmall : [979,3],
	   itemsTabletSmall: [979,2],
 		itemsMobile : [479,1]		
      }); 
	  $("#owl-demonew5").owlCarousel({
        autoPlay:4000,
		autoplayHoverPause:true,
		stopOnHover:true,
        items : 1, 
        pagination :false ,
		 navigation :true  ,
     itemsDesktop : [1199,1],
       itemsDesktopSmall : [979,1],
	   itemsTabletSmall: [979,1],
 		itemsMobile : [479,1]		
      }); 
	  $("#owl-demonew6").owlCarousel({
        autoPlay:4000,
		autoplayHoverPause:true,
		stopOnHover:true,
        items : 1,
		transitionStyle : "fade", 
        pagination :false ,
		 navigation :true  ,
     itemsDesktop : [1199,1],
       itemsDesktopSmall : [979,1],
	   itemsTabletSmall: [979,1],
 		itemsMobile : [479,1]		
      }); 
	 $(document).ready(function() {
     
      var sync1 = $("#sync1");
      var sync2 = $("#sync2");
     
      sync1.owlCarousel({
		autoPlay:6000,  
		autoplayHoverPause:true,
		stopOnHover:true,
        singleItem : true,
        slideSpeed : 1000,
        navigation : true,
        pagination:false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
      });
     
      sync2.owlCarousel({
		autoPlay:6000,
        items :5,
        itemsDesktop      : [1199,4],
        itemsDesktopSmall     : [979,3],
        itemsTablet       : [768,3],
        itemsMobile       : [479,2],
        pagination:false,
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
      });
     
      function syncPosition(el){
        var current = this.currentItem;
        $("#sync2")
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
          center(current)
        }
      }
     
      $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
      });
     
      function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
          if(num === sync2visible[i]){
            var found = true;
          }
        }
     
        if(found===false){
          if(num>sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", num - sync2visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync2.trigger("owl.goTo", num);
          }
        } else if(num === sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
          sync2.trigger("owl.goTo", num-1)
        }
        
      }
     
    });
    });
 
  //* owl  end*/ 
//jarallax js start 
// object-fit polyfill run
        objectFitImages();

        /* init Jarallax */
        jarallax(document.querySelectorAll('.jarallax'));

        jarallax(document.querySelectorAll('.jarallax-keep-img'), {
            keepImg: true,
        });

        /* init Flickity Carousel + Jarallax inside it */
        // new Flickity( '.demo-carousel', {
        //     initialIndex: 1,
        //     autoPlay: 3000,
        //     pauseAutoPlayOnHover: false,
        //     pageDots: false,
        //     prevNextButtons: false,
        //     wrapAround: true
        // });
        // jarallax(document.querySelectorAll('.demo-carousel .jarallax'), {
        //     elementInViewport: document.querySelectorAll('.demo-carousel')
        // });

        /* init Jarallax with jQuery */
        // $('.jarallax').jarallax({
        //     speed: 0.5,
        //     imgWidth: 1366,
        //     imgHeight: 768
        // });

//jarallax js end 
//height js start

$(document).ready(function(){
			
			//set the starting bigestHeight variable
			var biggestHeight = 0;
			//check each of them
			$('.faculty_info2').each(function(){
				//if the height of the current element is
				//bigger then the current biggestHeight value
				if($(this).height() > biggestHeight){
					//update the biggestHeight with the
					//height of the current elements
					biggestHeight = $(this).height();
				}
			});
			//when checking for biggestHeight is done set that
			//height to all the elements
			$('.faculty_info2').height(biggestHeight);
			
			//set the starting bigestHeight variable
			var biggestHeight = 0;
			//check each of them
			$(' ').each(function(){
				//if the height of the current element is
				//bigger then the current biggestHeight value
				if($(this).height() > biggestHeight){
					//update the biggestHeight with the
					//height of the current elements
					biggestHeight = $(this).height();
				}
			});
			//when checking for biggestHeight is done set that
			//height to all the elements
			$(' ').height(biggestHeight);
			
		});

//height js end

//back to top js start
 
/*
 *
 * Copyright (c) 2014-2016 Daniele Lenares (https://github.com/Ryuk87)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version 1.1.0
 *
 */
(function ($) {

    'use strict';

    /**
     * Animate the input object
     *
     * @param $obj
     * @param type
     * @param animation
     */
    function do_animation($obj, type, animation) {
        if (type == 'show') {
            switch (animation) {
                case 'fade':
                    $obj.fadeIn();
                    break;

                case 'slide':
                    $obj.slideDown();
                    break;

                default:
                    $obj.fadeIn();
            }
        } else {
            switch (animation) {
                case 'fade':
                    $obj.fadeOut();
                    break;

                case 'slide':
                    $obj.slideUp();
                    break;

                default:
                    $obj.fadeOut();
            }
        }
    }

    /**
     * Bind click event
     *
     * @param $obj
     */
    function click_event($obj, speed) {
        var not_clicked = true;
        $obj.on('click', function () {
            if (not_clicked == true) {
                not_clicked = false;
                $('html, body').animate({scrollTop: 0}, speed, function () {
                    not_clicked = true
                });
            }
        });
    }


    $.goup = function (user_params) {

        /* Default Params */
        var params = $.extend({
            location: 'right',
            locationOffset: 20,
            bottomOffset: 10,
            containerSize: 40,
            containerRadius: 10,
            containerClass: 'goup-container',
            arrowClass: 'goup-arrow',
            alwaysVisible: false,
            trigger: 500,
            entryAnimation: 'fade',
            goupSpeed: 'slow',
            hideUnderWidth: 500,
            containerColor: '#000',
            arrowColor: '#fff',
            title: '',
            titleAsText: false,
            titleAsTextClass: 'goup-text',
            zIndex: 1
        }, user_params);
        /* */

        /* Parameters check */
        if (params.location != 'right' && params.location != 'left') {
            params.location = 'right';
        }

        if (params.locationOffset < 0) {
            params.locationOffset = 0;
        }

        if (params.bottomOffset < 0) {
            params.bottomOffset = 0;
        }

        if (params.containerSize < 20) {
            params.containerSize = 20;
        }

        if (params.containerRadius < 0) {
            params.containerRadius = 0;
        }

        if (params.trigger < 0) {
            params.trigger = 0;
        }

        if (params.hideUnderWidth < 0) {
            params.hideUnderWidth = 0;
        }

        var checkColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
        if (!checkColor.test(params.containerColor)) {
            params.containerColor = '#000';
        }
        if (!checkColor.test(params.arrowColor)) {
            params.arrowColor = '#fff';
        }

        if (params.title === '') {
            params.titleAsText = false;
        }

        if (isNaN(params.zIndex)) {
            params.zIndex = 1;
        }
        /* */

        /* Create required elements */
        var $body = $('body');
        var $window = $(window);

        var $container = $('<div>');
        $container.addClass(params.containerClass);
        var $arrow = $('<div>');
        $arrow.addClass(params.arrowClass);

        $container.html($arrow);

        $body.append($container);


        /* Container Style */
        var containerStyle = {
            position: 'fixed',
            width: params.containerSize,
            height: params.containerSize,
            background: params.containerColor,
            cursor: 'pointer',
            display: 'none',
            'z-index': params.zIndex
        };
        containerStyle['bottom'] = params.bottomOffset;
        containerStyle[params.location] = params.locationOffset;
        containerStyle['border-radius'] = params.containerRadius;

        $container.css(containerStyle);

        if (!params.titleAsText) {
            $container.attr('title', params.title);
        } else {
            var $textContainer = $('<div>');
            $body.append($textContainer);
            $textContainer.addClass(params.titleAsTextClass).text(params.title);
            $textContainer.attr('style', $container.attr('style'));
            $textContainer.css('background', 'transparent')
                .css('width', params.containerSize + 40)
                .css('height', 'auto')
                .css('text-align', 'center')
                .css(params.location, params.locationOffset - 20);
            var textContainerHeight = parseInt($textContainer.height()) + 10;
            var containerBottom = parseInt($container.css('bottom'));
            var containerNewBottom = textContainerHeight + containerBottom;
            $container.css('bottom', containerNewBottom);
        }


        /* Arrow Style */
        var borderSize = 0.25 * params.containerSize;
        var arrowStyle = {
            width: 0,
            height: 0,
            margin: '0 auto',
            'padding-top': Math.ceil(0.325 * params.containerSize),
            'border-style': 'solid',
            'border-width': '0 ' + borderSize + 'px ' + borderSize + 'px ' + borderSize + 'px',
            'border-color': 'transparent transparent ' + params.arrowColor + ' transparent'
        };
        $arrow.css(arrowStyle);
        /* */


        /* params.trigger Hide under a certain width */
        var isHidden = false;
        $window.resize(function () {
            if ($window.outerWidth() <= params.hideUnderWidth) {
                isHidden = true;
                do_animation($container, 'hide', params.entryAnimation);
                if (typeof($textContainer) != "undefined") {
                    do_animation($textContainer, 'hide', params.entryAnimation);
                }
            } else {
                isHidden = false;
                $window.trigger('scroll');
            }
        });
        /* If i load the page under a certain width, i don't have the event 'resize' */
        if ($window.outerWidth() <= params.hideUnderWidth) {
            isHidden = true;
            $container.hide();
            if (typeof($textContainer) != "undefined")
                $textContainer.hide();
        }


        /* params.trigger show event */
        if (!params.alwaysVisible) {
            $window.scroll(function () {
                if ($window.scrollTop() >= params.trigger && !isHidden) {
                    do_animation($container, 'show', params.entryAnimation);
                    if (typeof($textContainer) != "undefined") {
                        do_animation($textContainer, 'show', params.entryAnimation);
                    }
                }

                if ($window.scrollTop() < params.trigger && !isHidden) {
                    do_animation($container, 'hide', params.entryAnimation);
                    if (typeof($textContainer) != "undefined") {
                        do_animation($textContainer, 'hide', params.entryAnimation);
                    }
                }
            });
        } else {
            do_animation($container, 'show', params.entryAnimation);
            if (typeof($textContainer) != "undefined") {
                do_animation($textContainer, 'show', params.entryAnimation);
            }
        }
        /* If i load the page and the scroll is over the trigger, i don't have immediately the event 'scroll' */
        if ($window.scrollTop() >= params.trigger && !isHidden) {
            do_animation($container, 'show', params.entryAnimation);
            if (typeof($textContainer) != "undefined") {
                do_animation($textContainer, 'show', params.entryAnimation);
            }
        }

        click_event($container, params.goupSpeed);
        if (typeof($textContainer) != 'undefined') {
            click_event($textContainer, params.goupSpeed);
        }
    };
}(jQuery));
 
$(document).ready(function(){
    jQuery.goup({trigger: 100,
	containerSize: 40,
                bottomOffset: 150,
                locationOffset: 30,
                title: 'Back To Top',
				containerColor: '#F78805',
                titleAsText: false});
});
 

//back to top js end

  
 //* left side bar  start*/ 
  
  //$(document).ready(function () {
//	"use strict";
//	var myNav = {
//		init: function () {
//			this.cacheDOM();
//			this.browserWidth();
//			this.bindEvents();
//		},
//		cacheDOM: function () {
//			this.navBars = $(".navBars");
//			this.toggle = $("#toggle");
//			this.navMenu = $("#menu2");
//		},
//		browserWidth: function () {
//			$(window).resize(this.bindEvents.bind(this));
//		},
//		bindEvents: function () {
//			var width = window.innerWidth;
//
//			if (width < 768) {
//				this.navBars.click(this.animate.bind(this));
//				this.navMenu.hide();
//				this.toggle[0].checked = false;
//			} else {
//				this.resetNav();
//			}
//		},
//		animate: function (e) {
//			var checkbox = this.toggle[0];
//
//			if (!checkbox.checked) {
//				this.navMenu.slideDown();
//			} else {
//				this.navMenu.slideUp();
//			}
//
//		},
//		resetNav: function () {
//			this.navMenu.show();
//		}
//	};
//	myNav.init();
//});  
  //*  left side bar  end*/
  
 
 
//accordition js start

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
 
//accordition js end


//search js start
$(document).ready(function(){
	$('a[href="#search"]').on('click', function(event) {                    
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});            
});
 //search js end

//menu js start
jQuery(document).ready(function($) {
			jQuery('.stellarnav').stellarNav({
				theme: 'light'
			});
		});

//menu js end


//counter js start
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

}); 
//counter js end


