document.getElementById('submit-button').addEventListener('click', function(event) {
    var submitSound = document.getElementById("submitSound");
    submitSound.play();
    //event.preventDefault();
    alert('Your message has been sent! :D');

    location.reload(); // Refresh the page
  });
  
 

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const targetBox = targetSection.querySelector('.box');

    // Check if the targeted section has a 'box' element
    if (targetBox) {
      targetBox.classList.add('glow');

      setTimeout(() => {
        targetBox.classList.remove('glow');
      }, 500);
    }
  });
});
document.getElementById('submit-button').addEventListener('click', function() {
    var sound = document.getElementById('button-sound');
    sound.play();
  });
  