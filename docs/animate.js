// Get all elements with the classes that need animation
const elements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up, .fade-in, .fadeintop, .fadeinbottomleft, .fadeintopright, .fadeinbottom, .fadeinbottomright');

// Create a new Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Check if the element is in the viewport
    if (entry.isIntersecting) {
      // Check if the element has any of the classes that need animation

      // Add the animation class to the current element based on its class
      if (entry.target.classList.contains('fade-in-left')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
      }
      if (entry.target.classList.contains('fade-in-right')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInRight');
      }
      if (entry.target.classList.contains('fade-in-up')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }
      if (entry.target.classList.contains('fade-in')) {
        entry.target.classList.add('animate__animated', 'animate__fadeIn');
      }
      if (entry.target.classList.contains('fadeintop')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInDown');
      }
      if (entry.target.classList.contains('fadeinbottomleft')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInBottomLeft');
      }
      if (entry.target.classList.contains('fadeintopright')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInTopRight');
      }
      if (entry.target.classList.contains('fadeinbottom')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }
      if (entry.target.classList.contains('fadeinbottomright')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInBottomRight');
      }

      // Stop observing the element to avoid triggering the animation multiple times
      observer.unobserve(entry.target);
    }
  });
});

// Start observing each element
elements.forEach(element => {
  observer.observe(element);
});
