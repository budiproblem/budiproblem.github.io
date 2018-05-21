//------------------------------------------------------------------------
//							PRELOADER SCRIPT
//------------------------------------------------------------------------
$(window).load(function() { // makes sure the whole site is loaded
	"use strict";   
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('.clock').fadeOut(); // will first fade out the loading animation	
	
	
//------------------------------------------------------------------------
//								MASONRY GRID
//------------------------------------------------------------------------	
	
    var $container = $('#portfolio .grid');
    $container.isotope({
        filter: '*',
		itemSelector: '.item_container',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('#portfolio .filter a').click(function(){
        $('#portfolio .filter .active').removeClass('active');
        $(this).addClass('active');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
	
	
	
//------------------------------------------------------------------------
//						INTRO SUPERSLIDER SETTINGS
//------------------------------------------------------------------------
	$("#intro").superslides({
		play: 8000,
		animation: "fade",
		animation_speed:"slow",
		pagination: false
	});
	
	
})




$(document).ready(function(){	
	"use strict";
	
	
//------------------------------------------------------------------------
//							ClICK SMOOTH SCROLL
//------------------------------------------------------------------------		
	$('a.trip, #nav a').smoothScroll({
  		speed: 1000
	});
	
	
	
	
//------------------------------------------------------------------------
//						     INTRO SLOGAN TYPE
//------------------------------------------------------------------------		
	$(".type").typed({
    	strings: ["Clean", "Fresh", "Responsive", "Light", "all U need"],
        typeSpeed: 200,
		backDelay:6000,
		loop: true,
        loopCount: false,
    });
	
	
	
	
//------------------------------------------------------------------------
//							OWL GALLERY
//------------------------------------------------------------------------	
		
	 $(".works_gallery").owlCarousel({
		autoPlay : 5000,
      	navigation : true, // Show next and prev buttons
     	slideSpeed : 300,
      	paginationSpeed : 400,
      	singleItem:true,
	  	navigationText: ["",""]
	});
	
	
	
//------------------------------------------------------------------------
//						     CONTACT FORM BUTTONS
//------------------------------------------------------------------------	
	$('.nav-contact a').click(function(event){
        $(this).parent().toggleClass('active');
        event.preventDefault();
    });
	$('#contact_cancel').click(function(event){
        $('.nav-contact').removeClass('active');
    });



//------------------------------------------------------------------------
//						     SIDEBAR BUTTONS
//------------------------------------------------------------------------	
	$('.sidebar a.side_link').click(function(event){
        $(this).parent().toggleClass('active');
        event.preventDefault();
    });
	
	
	
		
//------------------------------------------------------------------------
//					SUBSCRIBE FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------          
    $('#subscribe_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo( element.closest("form"));
        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    }); 
	

		
				
//------------------------------------------------------------------------------------
//					     SUBSCRIBE FORM MAILCHIMP INTEGRATIONS
//------------------------------------------------------------------------------------		
    $('#subscribe_form').submit(function() {
        $('.error').hide();
        $('.error').fadeIn();
        // submit the form
        if($(this).valid()){
            $('#subscribe_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    newsletter_email: $('#subscribe_email').val()
                },
                success: function(data) {
                    $('#subscribe_submit').button('reset');
                     $('#modalSubscribeSuccess .modal-title').html('Well done!<br>You are subscribed!');
					$('#modalSubscribeSuccess').modal('show');
                },
                error: function() {
                    $('#subscribe_submit').button('reset');
                    // Change subscribe form error message text here
                    $('#modalSubscribeSuccess .modal-title').html('Error!<br>Something goes wrong!');
					$('#modalSubscribeSuccess').modal('show');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        }
        return false; 
    });
	  
	


	
//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------		  
    $('#contact_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            message: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        messages: {
            name: "What's your name?",
            message: "Type your message",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });   




//------------------------------------------------------------------------------------
//								CONTACT FORM DATA SENDING
//------------------------------------------------------------------------------------	
	
    $('#contact_form').submit(function() {
        // submit the form
        if($(this).valid()){
            $('#contact_submit').button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactmessage: $('#contact_message').val()
                },
                success: function() {
                    $('#contact_submit').button('reset');
					$('.nav-contact').removeClass('active');
					$('#modalContactSuccess').modal('show');
                },
                error: function() {
                    $('#contact_submit').button('reset');
					$('#modalContactError').modal('show');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        } else {
            $('#contact_submit').button('reset')
        }
        return false; 
    });
	
	
	
	
//------------------------------------------------------------------------------------
//						COMMENT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------		  
    $('#comment_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            message: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        messages: {
            name: "What's your name?",
            message: "Your comments are important to us",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });  
	
	
	// ============= OPTION BLOCK SCRIPT ======================== 

	
	$('a.settings_link').click(function(event){
        $(this).parent().toggleClass('open');
        event.preventDefault();
    });   
	
	             
    $('.colors ul li a').click(function(event){
        $('.colors ul li a').removeClass('selected');
        $(this).addClass('selected');
                       
        event.preventDefault();
    });
	
   

});

