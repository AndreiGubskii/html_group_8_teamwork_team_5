var main = function() {
  /***** Side-menu *****/
  $.mobile.loading().hide();
  
  var isOpen = false,
  menuBtn = $('.menu-btn-open'),
  menu = $('.side-menu');

  function openMenu(){
    menu.animate({
      left: "0px"
    }, 300);
    isOpen = true;
  }

  function clouseMenu(){
    menu.animate({
      left: "-350px"
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

  function swipeRightListener( event ){
    openMenu();
  }
  function swipeLeftListener( event ){
    clouseMenu();
  }  
}

$(document).ready(main);