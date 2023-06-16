// Get all the filter buttons
const filterButtons = document.querySelectorAll('.filter-container .filter-btn');

// Add event listener to each button
filterButtons.forEach(button => {
  button.addEventListener('click', filterCards);
});

// Function to filter the cards based on selected tags
function filterCards() {
  const selectedTags = Array.from(filterButtons) // Convert the NodeList to an array
    .filter(button => button.classList.contains('active')) // Filter only the active buttons
    .map(button => button.value); // Get the values (tags) of the active buttons

  // Get all the cards
  const cards = document.querySelectorAll('.grid-item');

  // Iterate over each card and show/hide based on selected tags
  cards.forEach(card => {
    const cardTags = card.getAttribute('data-tags').split(' ');
    const isCardVisible = selectedTags.length === 0 || selectedTags.some(tag => cardTags.includes(tag));
    card.style.display = isCardVisible ? 'block' : 'none';
  });
}

// Toggle the active class when a button is clicked
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    filterCards();
  });
});
