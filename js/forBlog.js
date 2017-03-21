/**
 * Created by Медет on 21.03.2017.
 */
var main = function () {
    /***** Side-menu *****/
    var isOpen = false,
        menuBtn = $('.menu-btn-open'),
        menu = $('.side-menu'),
        contactInfoBtn = $('.contact-info'),
        contactInfoPanel = $(".contact-block");

    function openMenu() {
        menu.animate({
            left: "0"
        }, 300);
        isOpen = true;
    }

    function clouseMenu() {
        menu.animate({
            left: "-100%"
        }, 300);
        isOpen = false;
    }

    menuBtn.click(function () {
        if (isOpen) {
            clouseMenu();
        } else {
            openMenu();
        }
    });

    //Sticky
    $(window).scroll(function () {
        if ($(this).scrollTop() > 485) {
            menu.addClass("sticky");
        }
        else {
            menu.removeClass("sticky");
        }
    });

    // Contact info
    contactInfoBtn.click(function () {
        if (contactInfoPanel.is(":hidden")) {
            contactInfoPanel.show("slow");
        } else {
            contactInfoPanel.hide("slow");
        }
        return false;
    });

    //slick
    $(".blog-slider-block").slick({
        dots: false,
        mobileFirst: true,
        prevArrow: true,
        nextArrow: true
    });

};


$(document).ready(main);
