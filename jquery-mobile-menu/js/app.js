let $menu = $('#menu');
let $menuItems = $('#menu ul li a');
let $mobileMenu = $("<ul id='mobileMenu'><li class='mobileLink'>Menu</li></ul>");

$menuItems.each(function(item){
  $mobileMenu.append("<li class='mobileLink'>" + $(this).text()) + "</li>";
});

$menu.after($mobileMenu);

$mobileMenu.click(function(){
  let $defaultHeight = $('.mobileLink').css("height").slice(0,2);
  if ($(this).css("height") === $defaultHeight + "px") {
    // $(this).animate({height: $defaultHeight * 6 + "px"});
    $(this).css({height: $defaultHeight * 6 + "px"});
  } else {
    // $(this).animate({height: $defaultHeight + "px"});
    $(this).css({height: $defaultHeight + "px"});
  }
});