//content.js

console.log("content.js injected");

let resignButton;

// Function to set the button if it's null
function setButton() {
  resignButton = document.querySelector('[data-cy="resign-button"]');
  if (!resignButton) {
    // Code to set the button here, if necessary
    console.log("Button not set.");
  } else {
    console.log("Resign button found. ID:", resignButton.id);
    console.log("Resign button data:", resignButton.dataset);
  }
}

// Periodically check for the button every 5 seconds
setInterval(setButton, 5000);

// Click the button before the tab is closed
window.addEventListener('beforeunload', function(event) {
  if (resignButton) {
    resignButton.click();
    console.log("Resign button clicked.");
  }
});
