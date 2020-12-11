$(document).ready(function(){

            
        
    $("#sticker").sticky({
        topSpacing:0,
        zIndex:800
        });
  


    $('.gallery').magnificPopup({
        
        type:'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery:{
        enabled:true
        },

        mainClass: 'mfp-with-zoom', 
        zoom: {
        enabled: true, 

        duration: 300,
        easing: 'ease-in-out', 
        opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
        }
    });   
        
        
     new WOW().init();
    
    
     });