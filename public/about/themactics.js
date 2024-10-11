// Select all the discussion head elements
const discussHeads = document.querySelectorAll('.disscuss-head');

// Loop through each discussion head
discussHeads.forEach((head) => {
  head.addEventListener('click', function () {
    // Toggle the hidden class on the corresponding answer (next sibling)
    const answer = this.nextElementSibling;
    answer.classList.toggle('hidden');
    
    // Toggle the "+" and "-" icons
    const icon = this.querySelector('.icon');
    if (icon.textContent === '+') {
      icon.textContent = '-';
    } else {
      icon.textContent = '+';
    }
  });
});
