"use strict";

var CarLot = (function (original) {

  var inventoryArray = [];

  original.populatePage = function (inventory) {

    inventoryArray = inventory;
    console.log("inventoryArray definied as inventory, which is currently being run through the populatePage function");
    var mainDiv = document.getElementById("container");
    var createdDiv = document.createElement("DIV");
    createdDiv.classList.add("row");
    var n = 1;
      for (var i =0; i < inventory.length; i++) {

        var putToDiv = /*talk to adam*/
            `<div class="col-sm-3 offset-sm-1 bordered card" id="${inventory[i].year} ${inventory[i].model}">
            <h3>${inventory[i].make} ${inventory[i].model}</h3>
            <img src="../$[inventory[i].image}" alt="${inventory[i].year} ${inventory[i].model}">
            <p>Year: ${inventory[i].year}</p>
            <p>Price: $${inventory[i].price}</p>
            <p>${inventory[i].description}</p>
          </div>`;

        createdDiv.innerHTML += putToDiv;
        mainDiv.appendChild(createdDiv);
        if (i === ((n * 3) -1)) {
          createdDiv = document.createElement("DIV");
          createdDiv.classList.add("row");
          n++;
        }
      } 
      CarLot.activateEvents(); 
      console.log("END of FIRST function of the IIFE: you've just run inventory(defined as the inventoryArray) through populatePage, then called CarLot.activateEvents, with activateEvents being defined in the second function of this iife");
  }   

  console.log("in the second function, activateEvents is being declared below");
  original.activateEvents = function (atLeastGimmeAnError) {
    var carCards = document.getElementsByClassName("card");
    var inputText = document.getElementById("descrip-input");
    for (var i = 0; i < carCards.length; i++) {
      carCards[i].addEventListener('click', (event) => {
        console.log("what the heck is 'event'??", event);
        console.log("eventListener is listening for click, if click is heard, styling will be changed");
        console.log(event.currentTarget.classList.contains("selected"), event.currentTarget, event.target);
        if (!event.currentTarget.classList.contains("selected")) {
          
          console.log("what is the 'length' bit of carCards.length?", carCards.length, n);
          for (var n = 0; n < carCards.length; n++){
            carCards[n].classList.remove("selected");
          }

          console.log(CarLot.changeBorder, "if click was heard, 'changeBorder' was just called, though has yet to be defined where declared in carLot.js");
          CarLot.changeBorder(event.currentTarget, "selected");
        
        } else {
          console.log(CarLot.borderReset);
          CarLot.borderReset(event.currentTarget, "selected");
          console.log("a new lick was heard on different card, thus selecting a different carCard, so 'borderReset' was just called, though has yet to be defined where declared in carLot.js");
        } 

      });
    }
  } 
  
  CarLot.loadInventory(); 

  return original;



})(CarLot || {})















/*

setup
1) navbar with input field
2) the card info will be placed in a container on three cards
   separated into columns

IIFE-1: (carLot.js) 
"Load Inventory"
1)load json data to cards
2)expose a public getter to read
the array of cars (e.g. getInventory)
getter function: 


IIFE-2: (events.js) 
"activateEvents" 

getElementById(?) navbar field--- cursur on click, delete text entry,
onclick toggle the card background color
  and change the border width

IIFE-3:  (main.js) 
"attributes"
two functions:
    1)reset attributes with a)DOM element that was clicked on,
                            b) and a color name
    2)change attributes     a)DOM element that was clicked on,
                            b) and a color name */


// Event listener
    // click on card
    // fn():
    // card[i].addEventListener("click", fn());
    // Callback function
    // fn():
        // change css
            // create classes that override .card (class) defaults
            // toggle overriding classes on clicked card
        // focus on text input
            // add attribute to give text input focus


