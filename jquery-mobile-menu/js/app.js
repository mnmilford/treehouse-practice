let $menu = $('#menu');
let $menuItems = $('#menu ul li a');
let $mobileMenu = $("<ul id='mobileMenu'><li class='mobileLink'>Menu</li></ul>");

$menuItems.each(function(item){
  $mobileMenu.append("<li class='mobileLink'>" + $(this).text()) + "</li>";
});

$menu.after($mobileMenu);

$mobileMenu.click(function(){
  if ($(this).css("height") === "40px") {
    $(this).animate({height: "240px"});
  } else {
    $(this).animate({height: "40px"});
  }
});