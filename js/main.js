var main = function() {
  /***** Side-menu *****/  
  var isOpen = false,
  menuBtn = $('.menu-btn-open'),
  menu = $('.side-menu');

  function openMenu(){
    menu.animate({
      left: "0"
    }, 300);
    isOpen = true;
  }

  function clouseMenu(){
    menu.animate({
      left: "-100%"
    }, 300);
    isOpen = false;
  }

  menuBtn.click(function() {
    if(isOpen){
      clouseMenu();
    }else{
      openMenu();
    }
  });

  $("body").on("swiperight", swipeRightListener );
  $("body").on("swipeleft", swipeLeftListener );

  //Sticky
  $(window).scroll(function() {
    if ($(this).scrollTop() > 485){  
      menu.addClass("sticky");
    }
    else{
      menu.removeClass("sticky");
    }
  }); 
}

$(document).ready(main);