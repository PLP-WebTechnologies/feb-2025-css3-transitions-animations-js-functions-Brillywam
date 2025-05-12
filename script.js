// Add event listener to the button
document.getElementById('triggerButton').addEventListener('click', function () {
  const element = document.getElementById('animatedElement');
  
  // Add animation class
  element.classList.add('animated-element');
  
  // Save to localStorage
  localStorage.setItem('animationTriggered', 'true');
});

// Reset animation
document.getElementById('triggerButton').addEventListener('dblclick', function () {
  const element = document.getElementById('animatedElement');
  element.classList.remove('animated-element');
  localStorage.removeItem('animationTriggered');
});

// Retrieve data from localStorage on page load
window.addEventListener('load', function () {
  const animationTriggered = localStorage.getItem('animationTriggered');
  if (animationTriggered === 'true') {
    const element = document.getElementById('animatedElement');
    element.classList.add('animated-element');
  }
});