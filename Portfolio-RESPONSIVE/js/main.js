$(document).ready(function() {
    
    /*========Owl-Carosel========*/
    
    $('.project-section .gallary .test-popup-link').magnificPopup({
        type: 'image',
        // other options
        gallery:{enabled:true}
      });

    
      $('.client-item').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

    /*=========Nav-Bar==========*/
      $('.menu_area ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    /*=====Sticky Menu====== */
    
      $(window).scroll(function(){
     
        var ourWindow = $(this).scrollTop();
        
        if(ourWindow>300) {
            $('body').addClass('sticky');
        } else{
            $('body').removeClass('sticky');
        }
    });
    
    });

/*=============HAMBARG-MENU============*/

 function openNav(){
      document.getElementById("mynav").style.width="100%";
  }

function closeNav(){
      document.getElementById("mynav").style.width="0%";
  }



/*==============BRWOSER-COMPABILITY=============*/

$("a").on("click", function(event){
        
        if(this.hash !== ""){
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                   scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
                
            });
             
            }
                
    });





















