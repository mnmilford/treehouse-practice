let $menu = $('#menu');
let $menuItems = $('#menu ul li');
let $mobileMenu = $("<ul id='mobileMenu'><li class='mobileLink'>Menu</li></ul>");

$menuItems.each(function(item){
  $mobileMenu.append("<li class='mobileLink'>" + $(this).html()) + "</li>";
});

$menu.after($mobileMenu);

$mobileMenu.click(function(){
  let $defaultHeight = $('.mobileLink').height();
  if ($(this).height() === $defaultHeight) {
    $(this).height($defaultHeight * 6);
    $('.mobileLink:not(:nth-of-type(1)').fadeIn("slow").css("display", "flex");
  } else {
    $(this).height($defaultHeight);
    $('.mobileLink:not(:nth-of-type(1)').fadeOut("slow").css("display", "none");
  }
});