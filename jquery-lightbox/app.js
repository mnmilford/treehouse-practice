let $overlay = $("<div class='overlay'></div>");
let $img = $("<img class='fullsize'></img>");
let $caption = $("<div class='caption'></div>");

$("#imageGallery img").click(function(){
  // Figure out the src attribute of the image that's clicked
  let $imgSrc = $(this).attr("src");
  // Assign the src to the $img variable
  $img.attr("src", $imgSrc);
  // Add the $img to the overlay
  $overlay.append($img);
  // Grab the alt tag of the clicked image
  let $imgAlt = $(this).attr("alt");
  // Assign the alt as text content of $caption
  $caption.text($imgAlt);
  // Add caption to the overlay
  $overlay.append($caption);
  // Finally, add the overlay to the body
  $("body").append($overlay);
  $overlay.animate({opacity: 1}, 200);
  $overlay.click(function(){
    $(this).animate({opacity: 0}, 200, function(){
      $(this).remove();
    });
  })
});

