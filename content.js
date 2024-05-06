//content.js

console.log("content.js injected");

let resignButton;

// Function to set the button if it's null
function setButton() {
  resignButton = document.querySelector('[data-cy="resign-button"]');
}

// Periodically check for the button every 5 seconds
setInterval(setButton, 5000);

// Click the button before the tab is closed
window.addEventListener('beforeunload', function(event) {
  if (resignButton) {
    resignButton.click();
  }
});
