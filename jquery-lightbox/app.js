// Hide overlay to begin
$('.overlay').hide();

$("#imageGallery img").click(function(event){
  $('.overlay').fadeIn("fast", function(){
    $(this).click(function(){
      $(this).fadeOut();
    })
  });
  console.log($(this));
  console.log(event);
});