var CarLot = (function(original) {



	original.changeBorder = function(potato) {

		potato.classList.add("selected")
//needs to add .selected to .card

		};
	orignal.borderReset = function(potato) {
		
		potato.classList.remove("selected");
//needs to remove .selected
		};

// var editDescription = function() {
//   //change the description when the field is clicked
//   //event listener on click, & if click = true, allow edit of description in console 
//   console.log("edit description...");
// }


// //2) Also, clear the value of the text input in the navbar,
// //and put the cursor in the text
// var clearNavbar = function() {
//   //clear the navbar
//   console.log("clear navbar...");
// }
// // and place the cursor
// var placeCursor = function() {
//   //place the cursor in the input field
//   console.log("place crusor in field..");
// }

//navbar interactivity:
//1)when the input field is changed we want to add a description
  // this should happen simultaneously in navbar and the card selected

}(CarLot || {}));







