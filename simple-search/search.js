/* Important note 
All the answers will appear on the page after typing quit since the browser won't refresh the DOM until the while loop breaks
*/

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.getElementsByTagName('body')[0].innerHTML += ( '<p>' + message + '</p>');
}

while (true) {
  search = prompt("Search for a product in our store. Type 'list' to show all the produce that is in stock. Type 'quit' to exit.");
  if (search === 'quit') {
    break;
  } else if (search === 'list') {
      print(inStock.join(', '));
  } else {
      if (inStock.indexOf(search) !== -1) {
        print("Yes, we have " + search + " in stock.");
      } else {
        print("Nope. All out of " + search + "... Are you sure that's a food?");
      }
  }
}