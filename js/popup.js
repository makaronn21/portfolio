$(document).ready(function(){

    var fadeInTime = 400; 
    var fadeOutTime = 400; 
    var popupWindow = $('#popup-window'); 

    function fadein(el) {
      $(el).fadeIn(fadeInTime);
    }
    function fadeout(el) {
      $(el).fadeOut(fadeOutTime);
    }
   
   
    $('.popup-trigger').on('click touchend', function(){
      fadein(popupWindow);
    })
    
    
    $('.popup-close').on('click touchend', function() {
      fadeout(popupWindow);
    });
    
   
    $(document).on('mouseup', function(e) {
        if (!popupWindow.is(e.target) 
            && popupWindow.has(e.target).length === 0) 
        {
        fadeout(popupWindow);
        }
    });
  

    $(document).on('keyup', function(e) {
        if (e.keyCode == 27) { 
        fadeout(popupWindow);
        }
    });
  
  })