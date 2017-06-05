let $newColorBtn = $('#revealColorSelect');
let $addColorBtn = $('#addNewColor');
let $colorOptions = $('.controls ul');
let newRGB = [];

// Make the 'New Color' button reveal the color selector panel
$newColorBtn.click(function(){
  $('#colorSelect').fadeToggle(150);
})

function addColorOption(rgb) {
  let result = $("<li></li>");
  result.append(rgb);
}

$addColorBtn.click(function(){
  newRGB.splice(0);
  newRGB.push($("input[id='red']").prop("value"));
  newRGB.push($("input[id='green']").prop("value"));
  newRGB.push($("input[id='blue']").prop("value"));
  $('#colorSelect').fadeToggle(150);
})