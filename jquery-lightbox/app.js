// Hide overlay to begin
$('.overlay').hide();

$("#imageGallery a").click(function(event){
  $('.overlay').fadeIn("fast", function(){
    $(this).click(function(){
      $(this).fadeOut();
    })
  });
  console.log(event);
});