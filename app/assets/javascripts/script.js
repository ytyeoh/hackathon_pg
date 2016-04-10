/**
* JS file
*
*/

jQuery(document).ready(function($){

    // photo modal
    $(document).on( "click" , ".trigger-photo-modal" , function(event) {
        event.preventDefault();

        var link = $(this),
        	target = link.attr("href"),
        	modal = $( target );

        modal.removeClass(".mfp-hide");
        jQuery.magnificPopup.open({
            items: {
                src: modal,
                type: 'inline',
            },
          	fixedContentPos: false,
          	fixedBgPos: true,
          	overflowY: "auto",
          	closeBtnInside: true,
          	preloader: false, 
          	midClick: true,
          	removalDelay: 300,
            mainClass: "photo-modal",
        });
    });

    $(document).on( "click" , ".close-photo-modal" , function( event ) {
    	event.preventDefault();

        var link = $(this),
        	target = link.attr("href"),
        	modal = $( target );

		jQuery.magnificPopup.close({
		  	items: {
		    	src: modal,
		    	type: 'inline',
		  	},
		});

    });

}); // end