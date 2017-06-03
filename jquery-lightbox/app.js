// Hide overlay to begin
$('.overlay').hide();

$("#imageGallery img").click(function(event){
  let $imgSrc = $(this).clone().attr("src");
  $('.overlay').fadeIn("fast", function(){
    $(this).append("<img  class='fullsize' src='" + $imgSrc + "'</img>");
    // If user clicks on overlay it will fade out
    $(this).click(function(){
      $(this).fadeOut("fast", function(){
        $(this).empty();
      });
    })
  });
});