let $newColorBtn = $('#revealColorSelect');
let $addColorBtn = $('#addNewColor');
let $colorOptions = $('.controls ul');
let $color = $(".selected").css("background-color");
let newRGB = [];
let $canvas = $("canvas");
let context = $canvas[0].getContext("2d");
let lastEvent;
let mouseDown = false;

// Function to append color picker color to the $colorOptions ul
function addColorOption(rgbArray) {
  let result = $("<li></li>");
  let rgb = "rgb(" + rgbArray[0] + ", " + rgbArray[1] + ", " + rgbArray[2] + ")";
  $color = rgb;
  result.css("background-color", rgb);
  result.appendTo($colorOptions);
}

// Function to update the selected color when a NEW color is chosen with the color picker
function changeToNewColor() {
  $colorOptions.children().removeClass("selected");
  $colorOptions.children().last().addClass("selected");
}

// Function to update the color sampler when sliders change
function changeColor() {
  let r = $("#red").val();
  let g = $("#green").val();
  let b = $("#blue").val();
  $('#newColor').css("background-color", "rgb(" + r + ", " + g + ", " + b + ")");
}

// Make the 'New Color' button reveal the color selector panel
$newColorBtn.click(function(){
  $('#colorSelect').fadeToggle(150);
})

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

// Run the changeColor() function when any sliders change
$("input[type='range']").change(changeColor);

// Add a click listener to all color options
$(".controls ul").on("click", "li", function(){
  $(this).addClass("selected");
  $(this).siblings().removeClass("selected");
  // Reassign the $color variable every time a new color is selected
  $color = $(this).css("background-color");
})

// Detect mouse events on canvas & draw lines
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if (mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = $color;
    context.lineWidth = 3;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
});
