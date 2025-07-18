// Display the popup after 10 seconds
setTimeout(() => {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
  }, 10000);
  
  // Close the popup
  document.getElementById('close-popup').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
  });
  