let $newColorBtn = $('#revealColorSelect');
let $addColorBtn = $('#addNewColor');
let $colorOptions = $('.controls ul');
let $color = $(".selected").css("background-color");
let newRGB = [];

// Make the 'New Color' button reveal the color selector panel
$newColorBtn.click(function(){
  $('#colorSelect').fadeToggle(150);
})

// Function to append color picker color to the $colorOptions ul
function addColorOption(rgbArray) {
  let result = $("<li></li>");
  let rgb = "rgb(" + rgbArray[0] + ", " + rgbArray[1] + ", " + rgbArray[2] + ")";
  result.css("background-color", rgb);
  result.appendTo($colorOptions);
}

// Function to update the selected color when a NEW color is chosen with the color picker
function changeToNewColor() {
  $colorOptions.children().removeClass("selected");
  $colorOptions.children().last().addClass("selected");
}

// Make the Add Color button add a new circle to the available options
$addColorBtn.click(function(){
  newRGB.splice(0);
  newRGB.push($("input[id='red']").prop("value"));
  newRGB.push($("input[id='green']").prop("value"));
  newRGB.push($("input[id='blue']").prop("value"));
  $('#colorSelect').fadeToggle(150);
  addColorOption(newRGB);
  changeToNewColor();
})

// Function to update the color sampler when sliders change
function changeColor() {
  let r = $("#red").val();
  let g = $("#green").val();
  let b = $("#blue").val();
  // let rgb = "rgb(" + r + ", " + g + ", " + b + ")";
  $('#newColor').css("background-color", "rgb(" + r + ", " + g + ", " + b + ")");
}

// Run the changeColor() function when any sliders change
$("input[type='range']").change(changeColor);

// Add a click listener to all color options
$(".controls li").click(function(){
  $(this).addClass("selected");
  $(this).siblings().removeClass("selected");
  // Reassign the $color variable everytime a new color is selected
  color = $(this).css("background-color");
})