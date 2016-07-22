---
---

$(document).ready( function() {
  console.log("Hi there! Welcome to the console.");

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

});

//**
// float labels

// Float label styles for subject & comments on focus
// $("input").focus(function() {
// 		$(this).next(".form__label").addClass('active blue');
// })
// $("textarea.comments").focus(function() {
// 		$("label.comments").addClass('active blue');
// })
//
// // Float label styles for subject & comments on blur, if there is no value in the section.
// $("input.subject").blur(function() {
// 	$('label.subject').removeClass('blue');
// 		if (!$(this).val()) {
// 				$('label.subject').removeClass('active blue');
// 		}
// })
// $("textarea.comments").blur(function() {
// 	$('label.comments').removeClass('blue');
// 		if (!$(this).val()) {
// 				$('label.comments').removeClass('active blue');
// 		}
// })


// **
// svg animations
