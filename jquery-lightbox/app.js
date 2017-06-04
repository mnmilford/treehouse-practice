let $overlay = $('<div class="overlay"></div>');
let $img = $("<img class='fullsize'></img>");

$("#imageGallery img").click(function(){
  let $imgSrc = $(this).attr("src");
  $img.attr("src", $imgSrc);
  $overlay.append($img);
  $("body").append($overlay);
  $overlay.animate({opacity: 1}, 200);
  $overlay.click(function(){
    $(this).animate({opacity: 0}, 200, function(){
      $(this).remove();
    });
  })
});

