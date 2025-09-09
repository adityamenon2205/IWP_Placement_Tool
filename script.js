document.addEventListener("DOMContentLoaded", function() {
  const signUpBtn = document.querySelector('.sign-up-btn');
  if (signUpBtn) {
    signUpBtn.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Signed UP!');
    });
  }

  const tabButtons = document.querySelectorAll('.tab');
  tabButtons.forEach(function(tab) {
    tab.addEventListener('click', function() {
      alert(`Welcome: ${tab.textContent.trim()}`);
    });
  });
});