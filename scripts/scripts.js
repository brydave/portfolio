---
---

$(document).ready( function() {
  console.log("Hi there! Welcome to my console.");

  // image reveal - hover transition
  $(".block-wrapper").hover( function() {
    $(this).find(".img-clip").toggleClass("reveal")
  });

  // float labels
  $("input, textarea").focus(function() {
  	$(this).prev("label").addClass('active blue');
  })

  $("input, textarea").blur(function() {
  	$(this).prev('label').removeClass('blue');

		if (!$(this).val()) {
			$(this).prev('label').removeClass('active blue');
		}
  })

  // scrolling animation for header
  $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
        $(".site-nav__logo.fade").addClass("open-from-top");
        $(".site-header.fade").addClass("white-bg");
      } else {
        $(".site-nav__logo.fade").removeClass("open-from-top");
        $(".site-header.fade").removeClass("white-bg");
      }
  });

  // folding animation temp

  // var a = $(".fold-down");
  // a.click(function() {
  //   $(this).toggleClass("closed");
  // });

  // about section
  $('a[about]').click( function () {
    $('body').toggleClass('noflow');
    $('.about').toggleClass('open');
  });


});

// **
// svg animations
