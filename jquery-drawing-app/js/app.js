let $newColorBtn = $('#revealColorSelect');
let $addColorBtn = $('#addNewColor');
let $colorOptions = $('.controls ul');
let newRGB = [];

// Make the 'New Color' button reveal the color selector panel
$newColorBtn.click(function(){
  $('#colorSelect').fadeToggle(150);
})

function addColorOption(rgbArray) {
  let result = $("<li></li>");
  let rgb = "rgb(" + rgbArray[0] + ", " + rgbArray[1] + ", " + rgbArray[2] + ")";
  result.css("background", rgb);
  result.appendTo($colorOptions);
}

// Make the Add Color button add a new circle to the available options
$addColorBtn.click(function(){
  newRGB.splice(0);
  newRGB.push($("input[id='red']").prop("value"));
  newRGB.push($("input[id='green']").prop("value"));
  newRGB.push($("input[id='blue']").prop("value"));
  $('#colorSelect').fadeToggle(150);
  addColorOption(newRGB);
})

// Make color picker update the example color when sliders change
$(".sliders input[value]").change(function(){
  let $red = $("#red").prop("value");
  let $green = $("#green").prop("value");
  let $blue = $("#blue").prop("value");
  let rgb = "rgb(" + $red + ", " + $green + ", " + $blue + ")";
  $('#newColor').css("background-color", rgb);
})