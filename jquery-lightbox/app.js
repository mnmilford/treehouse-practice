// Hide overlay to begin
$('.overlay').hide();

$("#imageGallery img").click(function(event){
  let $imgSrc = $(this).clone().attr("src");
  $('.overlay').append("<img class='fullsize' src='" + $imgSrc + "'</img>");
  $('.overlay').fadeIn("fast", function(){
    // If user clicks on overlay it will fade out
    $(this).click(function(){
      $(this).fadeOut("fast", function(){
        $(this).empty();
      });
    })
  });
});