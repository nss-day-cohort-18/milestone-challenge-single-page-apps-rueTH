"use strict";
// This is a Function Expression (FE in IIFE)
var CarLot = (function() {
// Private variable   
var inventoryArray = [];

console.log("variables in carLot.js have just been declared")
  return {
      // Getting data for inventory array

      loadInventory: function () {
        
        // Create an XHR to load inventory
        var inventoryLoader = new XMLHttpRequest();
        console.log("XHR successfully assigned to var inventoryLoader, preparing to run event listener for lead event and execute anonymous callback");

            // Listen for when the lead event is broadcast
            // and execute an anonymous callback
            inventoryLoader.addEventListener("load", function () {

              // Set the value of the inventory array
              inventoryArray = JSON.parse(this.responseText).cars;
              console.log("value of inventoryArray has been set, json has been parsed", inventoryArray);
              CarLot.populatePage(inventoryArray);
              console.log("inventoryArray has been called to run through CarLot.populatePage, as defined in main.js");
              console.log("")

            });

        
            // get the array from JSON file
            inventoryLoader.open("GET","inventory.json");
            console.log("inventoryLoader has opened the private inventoryArray, preparing for inventoryLoader to 'send' this array to be populated");
            // start the process
            inventoryLoader.send();
            console.log("process of loading private inventoryArray has started with 'send', and now we can move on to giving the other IIFEs access to the private inventoryArray...");
      },


      // Giving access to private inventory array to other IIFES
      getInventory: function () {
        return inventoryArray;
      //   console.log("access to private inventoryArray successfully granted to other IIFEs! Thus, the car cards will populate, because populatePage in main.js is talking with this IIFE, in carLot.js")
      }

  }

})(CarLot || {}); 