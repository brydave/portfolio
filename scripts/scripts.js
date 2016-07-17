---
---

$(document).ready( function() {
  console.log("Hi there! Welcome to the console.");

  $(".block-wrapper").hover( function() {
    $(this).find(".img-clip").toggleClass("reveal")
  });
});


// **
// svg animations
