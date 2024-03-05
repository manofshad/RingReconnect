function checkForReconnectButton() {
  const button = document.querySelector('button[data-testid="video-error__button"]'); //Reconect Button
  if (button) {
    window.location.reload(); //Reloads the Page
  }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', checkForReconnectButton);

// Checks every 5 seconds
setInterval(checkForReconnectButton, 5000);